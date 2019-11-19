import { configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';

// global styles
import '../src/storybook/global.scss';

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);

addDecorator(
  withInfo({
    source: true,
    header: false,
  })
);
