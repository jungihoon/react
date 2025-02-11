import Main from "../pages/Main";
import Company from "../pages/Company";
import Business from "../pages/Business";
import Train from "../pages/Train";
import Fee from "../pages/Fee";

const navpass = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/Company",
    component: Company,
  },
  {
    path: "/Business",
    component: Business,
  },
  {
    path: "/Train",
    component: Train,
  },
  {
    path: "/Fee",
    component: Fee,
  },
];

export default navpass;
