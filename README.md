# nodejs-preact-ssr-starter

## Nodejs + Preactjs server side rendering with basic ssr routing and hydration.

### Why?

Because Preact is cool.

### No build tools route

This project does not have any build tooling similar to Webpack, or Vite. Why? Because it is possible to run minimal setup without build tooling.

### No Node web framework? (Express, Fastify)

Node web frameworks are great. However with a little bit of routing logic, node can be a great http server alone. Note: This approach non web framework might not be ideal for big projects.

### Routing HTTP Server

With the help of urlpattern-polyfill we can a basic router logic, also load static files in memory for fast access. 
See the `server-http.mjs` file. 

Example here:
https://examples.deno.land/http-server-routing



### How to get it started?
```
npm i 
npm run dev
```


### How to make my live easy if I will be maintaining html as string templates?

Use VSCode wth the lit-html extension - https://marketplace.visualstudio.com/items?itemName=bierner.lit-html.

### Links

Preact - https://preactjs.com/guide/v10/getting-started


### Caveat

As there isn't build tooling to split server form client components, in some situations we might need to maintain a server and a client component. See `Box.js` and `Box.mjs`.

### Simple naming convension to diffirentiate client from server components

I use `.js` file extension for client components and `.mjs` file extension for server components.

### 