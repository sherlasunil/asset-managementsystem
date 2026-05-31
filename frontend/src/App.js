import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";   // ✅ ADD THIS

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Inventory from "./pages/Inventory";
import Tickets from "./pages/Tickets";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login (no sidebar) */}
        <Route path="/login" element={<Login />} />

        {/* Pages WITH sidebar */}
         <Route path="/dashboard" element={
        <Layout>
          <Dashboard />
        </Layout>
      }
    />

    <Route path="/assets" element={
        <Layout>
          <Assets />
        </Layout>
      }
    />

    <Route path="/inventory" element={
        <Layout>
          <Inventory />
        </Layout>
      }
    />

    <Route path="/tickets" element={
        <Layout>
          <Tickets />
        </Layout>
      }
    />

    <Route path="/profile" element={
        <Layout>
          <Profile />
        </Layout>
      }
    />
      </Routes>
    </Router>
  );
}

export default App;