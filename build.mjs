/**
 * Precompiles the JSX sources into plain browser JS.
 *
 * index.html loads the generated .js files (never the .jsx ones), so the page
 * works when opened straight from disk (file://) as well as from GitHub Pages,
 * and no 3 MB Babel compiler has to be downloaded and run in the browser.
 *
 *   edit  *.jsx   →   npm run build   →   commit both the .jsx and the .js
 */
import { readFile, writeFile } from 'node:fs/promises';
import { transformAsync } from '@babel/core';
import presetReact from '@babel/preset-react';

const FILES = ['tweaks-panel.jsx', 'card-deck.jsx', 'app.jsx'];

for (const file of FILES) {
  const src = await readFile(new URL(file, import.meta.url), 'utf8');
  const result = await transformAsync(src, {
    filename: file,
    presets: [[presetReact, { runtime: 'classic' }]],
    babelrc: false,
    configFile: false,
    sourceMaps: false,
  });
  const out = file.replace(/\.jsx$/, '.js');
  const banner = `/* Generated from ${file} by \`npm run build\` — edit the .jsx source, not this file. */\n`;
  await writeFile(new URL(out, import.meta.url), banner + result.code + '\n');
  console.log(`✓ ${file} → ${out}`);
}
