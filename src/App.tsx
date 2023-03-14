import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { PrivateRoutes } from "./helpers/PrivateRouter";
import { UserManagement } from "./pages/UserManagement/UserManagement";
import { ResourcesManagement } from "./pages/ResourcesManagement/ResourcesManagement";
import { AdsManagement } from "./pages/AdsManagement/AdsManagement";
import { ChannelsManagement } from "./pages/ChannelsManagement/ChannelsManagement";
import { Complaints } from "./pages/Complaints/Complaints";
import { Requests } from "./pages/Requests/Requests";
import { Settings } from "./pages/Settings/Settings";
import { User } from "./pages/User/User";
import { Dashboard } from "./pages/Dashboard/Dashboard";

import "./App.css";
import { CreateNewFile } from "./pages/CreateNewFile/CreateNewFile";
import { Register } from "./pages/Auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes component={Dashboard} />}>
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/user-management/:user" element={<User />} />
          <Route
            path="/resources-management"
            element={<ResourcesManagement />}
          />
          <Route path="/add-file" element={<CreateNewFile />} />
          <Route path="/ads-management" element={<AdsManagement />} />
          <Route path="/channels-management" element={<ChannelsManagement />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<UserManagement />} />
        </Route>
        <Route element={<Register />} path="/registration" />
        <Route element={<Auth />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;
