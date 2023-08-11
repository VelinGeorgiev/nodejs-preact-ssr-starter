# nodejs-preact-ssr-starter

## Nodejs + Preactjs server-side rendering with basic ssr routing and hydration.

### Why?

Because Preact is cool.

### No build tools route

This project does not have any build tooling similar to Webpack, or Vite. Why? Because it is possible to run a minimal setup without build tooling.

### No Node web framework? (Express, Fastify)

Node web frameworks are great. However, with a little bit of routing logic, Nodejs can be a great HTTP server alone. Note: This non-web framework approach is unsuitable for big projects.

### Routing HTTP Server

Using urlpattern-polyfill, a basic ssr router can be created. Also, this project loads static files in memory for fast access. 
See the `server-http.mjs` file. 

Example of a ssr router using `urlpattern` here:
https://examples.deno.land/http-server-routing


### How to get it started?
```
npm i 
npm run dev
```


### How to make my life easy if I maintain html as string templates?

Use VSCode with the lit-html extension - https://marketplace.visualstudio.com/items?itemName=bierner.lit-html.

### Links

Preact - https://preactjs.com/guide/v10/getting-started


### Caveat

As there aren't build tools to split server from client components, we might need to maintain a server and a client component in some situations. See `Box.mjs` and `Box.js`. I am yet to find a more elegant way to handle this.

### Simple naming convention to differentiate client from server components

I use the `.js` file extension for client components and the `.mjs` file extension for server components.
