import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from '../client/components/Root/Root.jsx';


export default (ctx) => {

    let requestUrl = ctx.request.url;

    const content = renderToString(
        <StaticRouter location={requestUrl} context={{}}>
            <Root />
        </StaticRouter>
    );
    return `
            <html>
                <head></head>
                <body>
                    <div id="root">${content}</div>
                    <script src="bundle.js"></script>
                </body>
            </html>
    `;
}