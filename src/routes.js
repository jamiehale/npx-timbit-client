import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CreateIcon from '@material-ui/icons/Create';
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import ReportsPage from "./views/Reports/Reports";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: '/search',
    name: 'Search',
    icon: SearchIcon,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: SettingsIcon,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: Person,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/reports/new",
    name: "Add New Report",
    icon: AddIcon,
    component: ReportsPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/reports",
    name: "Generate Report",
    icon: SearchIcon,
    component: ReportsPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/reports/live",
    name: "Live Health Report",
    icon: TrendingUpIcon,
    component: ReportsPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/reports/improvement-actions",
    name: "SHIP/CHIP",
    icon: CreateIcon,
    component: ReportsPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/maps",
    name: "6",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/notifications",
    name: "7",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
];

export default dashboardRoutes;
