export default function (context) {
    console.log('auth!!!', context.store.getters.checkAuthUser);
    if (!context.store.getters.checkAuthUser) {
        context.redirect('/admin/auth');
    }
}