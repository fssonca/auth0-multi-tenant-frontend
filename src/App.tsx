import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import TenantLogin from "./components/TenantLogin";
import Homepage from "./components/Homepage";

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
      </Routes>
    </Router>
  );
}

export default App;
