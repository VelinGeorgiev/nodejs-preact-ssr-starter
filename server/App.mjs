import { h } from 'preact';
import { html } from 'htm/preact';
import Box from './Box.mjs';

const App = ({ id }) => {
    return (html`
    <html>
        <head>
            <title>Page</title>
            <meta name='description' content='Page' />
            <meta charSet="utf-8" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
        </head>
        <body>
            <div id="app">
                <${Box} />
            </div>
            ${id && html`<div>ID: ${id}</div>`}
            <script type="module" src="/Hydrate.js"></script>
        </body>
    </html>
    `);
}

export default App;