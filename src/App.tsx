import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TenantLogin from "./components/TenantLogin";
import Homepage from "./components/Homepage";
import Callback from "./components/Callback";

function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<Homepage />} />

        {/* Default login (no tenant) */}
        <Route path="/login" element={<Login />} />

        {/* Tenant-specific login (param = orgSlug) */}
        <Route path="/login/:orgSlug" element={<TenantLogin />} />

        {/* Callback page (after Auto0 login) */}
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
