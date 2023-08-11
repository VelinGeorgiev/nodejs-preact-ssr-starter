import { h, Component, hydrate } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';
import { Box } from './Box.js';

const html = htm.bind(h);

hydrate(html`<${Box} />`, document.getElementById('app'));