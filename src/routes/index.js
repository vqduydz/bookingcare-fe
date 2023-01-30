import ContentOnlyLayout from '_/layouts/ContentOnlyLayout/ContentOnlyLayout';
import { ForgotPassword, Home, Login, NotFoundPage, Signup } from '_/pages';
import UserManager from '_/pages/System/UserManager';

const routes = {
    home: '/',
    login: '/login',
    signup: '/signup',
    usermanager: '/usermanager',
    forgotpassword: '/forgotpassword',
    notfoundpage: '*',
};

const PublicRoutes = [
    { path: routes.home, comp: Home },
    { path: routes.login, comp: Login, layout: ContentOnlyLayout },
    { path: routes.signup, comp: Signup, layout: ContentOnlyLayout },
    { path: routes.usermanager, comp: UserManager, layout: ContentOnlyLayout },
    { path: routes.forgotpassword, comp: ForgotPassword, layout: ContentOnlyLayout },
    { path: routes.notfoundpage, comp: NotFoundPage },
];

const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes, routes };
