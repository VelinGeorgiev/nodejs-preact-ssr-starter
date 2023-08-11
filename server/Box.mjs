import { h } from 'preact';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';

const Box = () => {
    const [title] = useState('Hello Box!');

    return (html`<div>${title}</div>`);
}

export default Box;