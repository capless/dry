import { configure } from "@storybook/react";
import '../src/storybook/styles/global.scss';

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
