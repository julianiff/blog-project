import {build, buildSync} from 'esbuild';

build({
  entryPoints: ['./src/index.ts'],
  outdir: './docs/public',
  bundle: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  color: true,
  format: 'esm',
});

buildSync({
  entryPoints: ['./docs-src/docs.css'],
  bundle: true,
  outdir: './docs/public',
});

buildSync({
  entryPoints: ['./node_modules/prismjs/themes/prism-okaidia.css'],
  bundle: true,
  outdir: './docs/public',
});

