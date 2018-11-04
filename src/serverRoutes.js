import serverRenderer from './helpers/serverRenderer';
import createStore from './helpers/createStore';
import { setUsers } from './client/redux/actions/users';
import { ApiClient } from './api/client';
import getRobotsTxt from './helpers/getRobotsTxt';
import getSitemap from './helpers/getSitemap';

module.exports = router => {

    router.get('/robots.txt', async ctx => {
        ctx.type = 'text/plain';
        ctx.body = getRobotsTxt(ctx);
    });

    router.get('/sitemap.xml', async ctx => {
        ctx.type = 'text/xml';
        ctx.body = await getSitemap(ctx);
    });

    router.get('*', async ctx => {

        // TO DO - INCAPSULATE THIS
        const store = createStore();
        const users = await ApiClient.getUsers();
        store.dispatch(setUsers(users));

        ctx.body = serverRenderer(ctx, store);
    });
}