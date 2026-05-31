import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#333", color: "#fff", height: "100vh", padding: "20px" }}>
      <h3>Dashboard</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
        <li><Link to="/assets" style={{ color: "#fff" }}>Assets</Link></li>
        <li><Link to="/inventory" style={{ color: "#fff" }}>Inventory</Link></li>
        <li><Link to="/tickets" style={{ color: "#fff" }}>Tickets</Link></li>
        <li><Link to="/profile" style={{ color: "#fff" }}>Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;