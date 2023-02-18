import ContentOnlyLayout from '_/layouts/ContentOnlyLayout/ContentOnlyLayout';
import SystemLayout from '_/layouts/SystemLayout/SystemLayout';
import { ForgotPassword, Home, Login, NotFoundPage, Signup } from '_/pages';
import ResetPass from '_/pages/auth/ResetPass';
import Manage from '_/pages/system/Manage';

const routes = {
    home: '/',
    login: 'login',
    signup: 'signup',
    manage: '/manage',
    usermanage: '/user',
    amanage: '/a',
    bmanage: '/b',
    cmanage: '/c',
    dmanage: '/d',
    emanage: '/e',
    forgotpassword: '/forgotpassword',
    resetPassword: '/reset-password/:token',
    notfoundpage: '*',
};

const PublicRoutes = [
    { path: routes.home, comp: Home },
    { path: routes.login, comp: Login, layout: ContentOnlyLayout },
    { path: routes.signup, comp: Signup, layout: ContentOnlyLayout },
    { path: routes.resetPassword, comp: ResetPass, layout: ContentOnlyLayout },
    { path: routes.forgotpassword, comp: ForgotPassword, layout: ContentOnlyLayout },
    //
    { path: '/manage/*', comp: Manage, layout: SystemLayout },
    { path: routes.notfoundpage, comp: NotFoundPage },
];

const PrivateRoutes = [];

export { PrivateRoutes, PublicRoutes, routes };
