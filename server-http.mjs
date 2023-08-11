import http from 'http';
import fs from "fs";
import path from 'path';
import { h } from 'preact';
import { html } from 'htm/preact';
import render from 'preact-render-to-string';
import { URLPattern } from "urlpattern-polyfill";

import App from './server/App.mjs';

import { minify as minifyJs } from "uglify-js";
import { minify as minifyCss } from 'csso';    

const __dirname = path.resolve();
const host = 'localhost';
const port = 3001;

// load static files to memory
const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {

      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);

    } else {

      const fullPath = path.join(dirPath, "/", file);
      const relativePath = fullPath.replaceAll(__dirname + '/client', '');
      const ext = path.parse(fullPath).ext;
      const buffer = fs.readFileSync(fullPath);

      let fileAsText = buffer.toString();
      if (ext === '.css') {
        // minify css
        fileAsText = minifyCss(fileAsText).css;
      } else if(ext === '.js' || ext === '.mjs') {
        // minify js
        fileAsText = minifyJs(fileAsText).code;
      }

      const map = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.jsm': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      };

      const result = {
        contentType: map[ext] || 'text/plain',
        relativePath,
        fileAsText,
        ext
      }

      arrayOfFiles.push(result); // 

    }
  })

  return arrayOfFiles;
}

let files = [];
files = getAllFiles(__dirname + '/client', files);

const server = http.createServer((req, res) => {

  const url = new URL(`http://${host}:${port}${req.url}`); // this can be done better.

  // static files routing
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const { contentType, relativePath, fileAsText } = file;
    const pattern = new URLPattern({ pathname: relativePath });
    let match = pattern.exec(url);
    if (match) {
      res.setHeader('Content-Type', contentType);
      res.end(fileAsText);
      return;
    }
  } 

  // homepage route
  let pattern = new URLPattern({ pathname: '/' });
  let match = pattern.exec(url);
  if (match) {
    res.end(`<!DOCTYPE html>${render(html`<${App} />`)}`);
    return;
  }

  // dynamic route
  pattern = new URLPattern({ pathname: '/box/:id' });
  match = pattern.exec(url);
  if (match) {
    const { id } = match.pathname.groups;
    res.end(`<!DOCTYPE html>${render(html`<${App} id=${id} />`)}`);
    return;
  }

  // undefined route, then send 404 not found
  res.writeHead(404);
  res.end('Not found');
  return;
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});