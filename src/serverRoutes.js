import renderer from './helpers/renderer';

module.exports = router => {
    router.get('*', ctx => {
        ctx.body = renderer(ctx);
    });
}