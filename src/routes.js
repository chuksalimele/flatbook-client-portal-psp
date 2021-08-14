/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";

// core components/views for Admin layout
import PortalDashboard from "views/PortalDashboard/PortalDashboard.js";
import PortalProfile from "views/PortalProfile/PortalProfile.js";
import PortalSecurity from "views/PortalSecurity/PortalSecurity.js";
import PortalAccounts from "views/PortalAccounts/PortalAccounts.js";
import PortalPreferences from "views/PortalPreferences/PortalPreferences.js";
import PortalHelp from "views/PortalHelp/PortalHelp.js";
import EditProfile from "views/PortalProfile/Edit/EditProfile.js";
//import DashboardPage from "views/Dashboard/Dashboard.js";
//import UserProfile from "views/UserProfile/UserProfile.js";
//import TableList from "views/TableList/TableList.js";
//import Typography from "views/Typography/Typography.js";
//import Icons from "views/Icons/Icons.js";
//import Maps from "views/Maps/Maps.js";
//import NotificationsPage from "views/Notifications/Notifications.js";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";
import {
  AccountCircle,
  Edit,
  Help,
  Security,
  Settings,
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: PortalDashboard,
    showOnSidebar: true,
    layout: "/client/portal",
  },
  {
    path: "/profile",
    name: "Profile",
    rtlName: "لوحة القيادة",
    icon: Person,
    component: PortalProfile,
    showOnSidebar: true,
    layout: "/client/portal",
  },
  {
    path: "/edit_profile",
    name: "Edit Profile",
    rtlName: "لوحة القيادة",
    icon: Edit,
    component: EditProfile,
    showOnSidebar: false,
    layout: "/client/portal",
  },
  {
    path: "/security",
    name: "Security",
    rtlName: "لوحة القيادة",
    icon: Security,
    component: PortalSecurity,
    showOnSidebar: true,
    layout: "/client/portal",
  },
  {
    path: "/accounts",
    name: "Accounts",
    rtlName: "لوحة القيادة",
    icon: AccountCircle,
    component: PortalAccounts,
    showOnSidebar: true,
    layout: "/client/portal",
  },
  {
    path: "/preferences",
    name: "Preferences",
    rtlName: "لوحة القيادة",
    icon: Settings,
    component: PortalPreferences,
    showOnSidebar: true,
    layout: "/client/portal",
  },
  {
    path: "/help",
    name: "Help",
    rtlName: "لوحة القيادة",
    icon: Help,
    component: PortalHelp,
    showOnSidebar: true,
    layout: "/client/portal",
  },
  /*  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },*/
];

export default dashboardRoutes;
