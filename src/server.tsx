import express from 'express';
import * as heroku from 'process';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { html } from './html';

console.log(heroku.env.RAZZLE_PUBLIC_DIR);
let assets: any;
const publicPath: string = heroku.env.RAZZLE_PUBLIC_DIR || process.env.RAZZLE_PUBLIC_DIR!;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();
const server = express()
  .disable('x-powered-by')
  .use(express.static(publicPath))
  .get('/*', (req: express.Request, res: express.Response) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    res.send(html(assets, markup));
  });

export default server;
