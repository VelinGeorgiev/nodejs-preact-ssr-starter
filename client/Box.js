import { h, Component } from 'https://esm.sh/preact';
import { useState, useEffect } from 'https://esm.sh/preact/hooks';
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

const Box = () => {
    const [title, setTitle] = useState('Hello Box!');

    useEffect(() => {
        setTitle('Hello Box Hydrated');
    }, []);

    return (html`<div>${title}</div>`);
}

export { Box };