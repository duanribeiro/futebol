import Intro from "views/Intro";
import Users from "views/Users/User";
import UserEdit from "views/Users/UserEdit";

const dashboardRoutes = [
  { path: "/intro", component: Intro },
  { path: "/users", component: Users },
  { path: "/users/add", component: UserEdit },
  { path: "/users/edit/:id", component: UserEdit }
];

export default dashboardRoutes;