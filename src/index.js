
import Koa from 'koa';
import Router from 'koa-router';
import debug from 'debug';

const deb = debug('Server');
debug.enable('Server')

deb('running on port 3000');

const app = new Koa();
const router = new Router();

require('./serverRoutes')(router);

app.use(require('koa-static')('./public', {}));

app.use(router.routes());

app.listen(3000);

