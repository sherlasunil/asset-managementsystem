import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="container mt-3">
          {children}
        </div>

      </div>
    </div>
  );
}


export default Layout;