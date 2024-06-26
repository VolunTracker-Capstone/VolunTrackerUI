import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Login from "./components/user/Login.jsx";
import User from "./components/user/User.jsx";
import AccountCreation from "./components/user/AccountCreation.jsx";
import ForgotPassword from "./components/user/ForgotPassword.jsx";
import OrganizationCreation from "./components/organization/OrganizationCreation.jsx";
import FAQ from "./components/FAQ.jsx";
import Manage from "./components/Manage.jsx";
import EventCreation from "./components/organization/EventCreation.jsx";
import NotificationTest from "./components/NotificationTest.jsx";
import OrganizationReport from "./components/organization/OrganizationReport.jsx";
import Settings from "./components/organization/Settings.jsx";
import Organizations from "./components/organization/Organizations.jsx";
import Events from "./components/organization/Events.jsx";
import { AuthContextProvider } from './components/user/AuthContext.jsx';
import OrganizationDetails from "./components/organization/OrganizationDetails.jsx";
import { UserOrganizationsProvider } from "./components/user/UserOrganizationsContext.jsx";
import EventDetails from "./components/organization/EventDetails.jsx";
import ManageOrg from "./components/organization/ManageOrg.jsx"
import OrganizationMember from "./components/organization/OrganizationMember.jsx";
import OrgFile from "./components/organization/OrgFile.jsx";
import OrgEvents from "./components/organization/OrgEvents.jsx";

function App() {
    return (
        <AuthContextProvider>
        <UserOrganizationsProvider>
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/organizations/create" element={<OrganizationCreation/>}>
                    {/*<Route path="/" element={<OrganizationCreation/>} />*/}
                    {/*<Route path="/create" element={<OrganizationCreation/>} />*/}
                </Route>
                <Route path="/organizations" element={<Organizations/>}></Route>
                <Route path="/organizations/:organizationId" element={<OrganizationDetails/>}></Route>
                <Route path="/faq" element={<FAQ/>} ></Route>
                <Route path="/events" element={<Events/>} />
                <Route path="/events/:eventId" element={<EventDetails/>} />
                <Route path="/manage" element={<Manage/>} />
                <Route path="/manage/:organizationId" element={<ManageOrg/>} />
                <Route path="/manage/:organizationId/settings" element={<Settings/>}></Route>
                <Route path="/manage/:organizationId/report" element={<OrganizationReport/>}></Route>
                <Route path="/manage/:organizationId/events" element={<OrgEvents/>} />
                <Route path="/manage/:organizationId/events/create" element={<EventCreation/>} />
                <Route path="/manage/:organizationId/files" element={<OrgFile/>}></Route>
                <Route path="/manage/:organizationId/:memberId" element={<OrganizationMember/>} />
                <Route path="/notification-test" element={<NotificationTest/>} />
                <Route path="create-account" element={<AccountCreation/>} />
                <Route path="/user">
                    <Route path="" element={<User/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="password-reset" element={<ForgotPassword/>} />
                </Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
        </UserOrganizationsProvider>
        </AuthContextProvider>
    )
}

export default App