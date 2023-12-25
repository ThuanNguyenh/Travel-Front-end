import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";

// không cần đăng nhập
const publicRoutes = [
    // route
    {path: '/', component: HomePage},
    {path: '/login', component: AuthPage, layout: null}
];

// bắt buộc đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes};