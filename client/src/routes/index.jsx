import Layout from "layouts/DashboardLayout.jsx";
import {
  Login,
  Register,
  ForgotPassword
} from 'views/pages/index';

const indexRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/forgotPassword", component: ForgotPassword },
  { path: "/", component: Layout },
];

export default indexRoutes;