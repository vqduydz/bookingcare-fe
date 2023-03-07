import {
    ContentManage,
    ForgotPassword,
    Home,
    Login,
    Manage,
    NotFoundPage,
    OrderManage,
    Profile,
    Register,
    UserManage,
    Project,
    Timeline,
} from '_/components/pages';
import ResetPass from '_/components/pages/auth/ResetPass';
import ContentOnlyLayout from '_/layouts/ContentOnlyLayout/ContentOnlyLayout';
import SystemLayout from '_/layouts/SystemLayout/SystemLayout';

const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    manage: '/manage',
    usermanage: '/manage/user',
    contentmanage: '/manage/a',
    ordermanage: '/manage/b',

    forgotpassword: '/forgotpassword',
    resetPassword: '/reset-password/:token',
    profile: '/profile',
    timeline: '/timeline',
    project: '/project',
    notfoundpage: '*',
};

const PublicRoutes = [
    { path: routes.home, comp: Home },
    { path: routes.login, comp: Login, layout: ContentOnlyLayout },
    { path: routes.register, comp: Register, layout: ContentOnlyLayout },
    { path: routes.resetPassword, comp: ResetPass, layout: ContentOnlyLayout },
    { path: routes.forgotpassword, comp: ForgotPassword, layout: ContentOnlyLayout },
    { path: routes.notfoundpage, comp: NotFoundPage },
    { path: routes.profile, comp: Profile, layout: ContentOnlyLayout },
    { path: routes.timeline, comp: Timeline, layout: ContentOnlyLayout },
    { path: routes.project, comp: Project, layout: ContentOnlyLayout },
];

const PrivateRoutes = [
    { path: routes.home, comp: Home },
    { path: routes.login, comp: Login, layout: ContentOnlyLayout },
    { path: routes.register, comp: Register, layout: ContentOnlyLayout },
    { path: routes.resetPassword, comp: ResetPass, layout: ContentOnlyLayout },
    { path: routes.forgotpassword, comp: ForgotPassword, layout: ContentOnlyLayout },
    { path: routes.manage, comp: Manage, layout: SystemLayout },
    { path: routes.usermanage, comp: UserManage, layout: SystemLayout },
    { path: routes.contentmanage, comp: ContentManage, layout: SystemLayout },
    { path: routes.ordermanage, comp: OrderManage, layout: SystemLayout },
    { path: routes.notfoundpage, comp: NotFoundPage, layout: SystemLayout },
];

export { PrivateRoutes, PublicRoutes, routes };
