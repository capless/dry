import { configure } from "@storybook/react";

// global styles
import '../src/storybook/global.scss';

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
