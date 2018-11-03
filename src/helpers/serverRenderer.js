import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from '../client/components/Root/Root.jsx';


export default (requestContext, initialStore) => {

    let requestUrl = requestContext.request.url;

    const content = renderToString(
        <Provider store={initialStore}>
            <StaticRouter location={requestUrl} context={{}}>
                <Root />
            </StaticRouter>
        </Provider>
    );
    return `
            <html>
                <head></head>
                <body>
                    <script id="preloaded_state">
                        window._PRELOADED_STATE_ = ${JSON.stringify(initialStore.getState())}
                    </script>
                    <div id="root">${content}</div>
                    <script src="bundle.js"></script>
                </body>
            </html>
    `;
}