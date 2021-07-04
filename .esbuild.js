import {build} from 'esbuild';

build({
  entryPoints: ['./public/styling.css'],
  outdir: './public',
  bundle: true,
  minify: true,
  sourcemap: true,
  color: true,
  format: 'esm',
  allowOverwrite: true,
});
