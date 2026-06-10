import { useState, useEffect } from "react";
import axios from "axios";

function Inventory() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://asset-management-system-2wz5.onrender.com/api/assets/",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => setAssets(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Inventory</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.type}</td>
              <td>{asset.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;