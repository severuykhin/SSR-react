import serverRenderer from './helpers/serverRenderer';
import createStore from './helpers/createStore';
import { setUsers } from './client/redux/actions/users';
import { ApiClient } from './api/client';

module.exports = router => {
    router.get('*', async ctx => {

        // TO DO - INCAPSULATE THIS
        const store = createStore();
        const users = await ApiClient.getUsers();
        store.dispatch(setUsers(users));

        ctx.body = serverRenderer(ctx, store);
    });
}