import express from 'express';
import {Request, Response} from 'express';

import React from 'react';
import ReactDomServer from 'react-dom/server';
import {renderToString } from 'react-dom/server';

const app = express();

import Hello from './component/Hello';

const doIt = (req: Request, res: Response) => {
    res.send(htmlTemplate( renderToString(Hello) ) );
}

const htmlTemplate = (reactDom: any) => (
    `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
        </body>
        </html>
    `    
)

app.get("/", doIt);

app.listen(3000, () => {
    console.log('express running @ 3000');
});
