import serverRenderer from './helpers/serverRenderer';
import createStore from './helpers/createStore';

module.exports = router => {
    router.get('*', ctx => {

        const store = createStore();

        // TO DO some logic to fetch data for response

        ctx.body = serverRenderer(ctx, store);
    });
}