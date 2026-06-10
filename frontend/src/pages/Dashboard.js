import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get("https://asset-management-system-2wz5.onrender.com/api/assets/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setAssets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const totalAssets = assets.length;

  const availableAssets = assets.filter(
    (asset) => asset.status?.toLowerCase() === "available"
  ).length;

  const assignedAssets = totalAssets - availableAssets;

  return (
    <div className="container">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3 shadow text-center bg-primary text-white">
            <h6>Total Assets</h6>
            <h2>{totalAssets}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center bg-success text-white">
            <h6>Assigned</h6>
            <h2>{assignedAssets}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow text-center bg-warning text-dark">
            <h6>Available</h6>
            <h2>{availableAssets}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;