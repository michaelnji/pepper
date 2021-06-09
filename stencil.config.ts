import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
const postcssPresetEnv = require('postcss-preset-env');
export const config: Config = {
  namespace: 'pepper',
  // globalStyle: 'src/styles/global.scss',
    plugins: [
    , postcss({
      plugins: [autoprefixer(), postcssPresetEnv(/* pluginOptions */)]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
