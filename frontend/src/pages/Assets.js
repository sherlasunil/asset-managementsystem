import { useState, useEffect } from "react";
import axios from "axios";

function Assets() {
  const [assets, setAssets] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const[editId, setEditId]=useState(null);

const [newAsset, setNewAsset] = useState({
  name: "",
  type: "",
  status: "",
  purchase_date: "",
});

  // ✅ FETCH DATA
useEffect(() => {

  axios.get( "https://asset-management-system-2wz5.onrender.com/api/assets/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    } 
  })

  .then((res) => {
    setAssets(res.data);
  })

  .catch((err) => console.log(err));

}, []);

  // ✅ ADD ASSET
const handleAdd = () => {

  if (!newAsset.name || !newAsset.type || !newAsset.status) {
    alert("Please fill required fields");
    return;
  }

  // ✅ UPDATE
  if (editId) {

    axios.patch(
  `https://asset-management-system-2wz5.onrender.com/api/assets/${editId}/`,
      newAsset,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )

    .then((res) => {

      setAssets(
        assets.map((a) =>
          a.id === editId ? res.data : a
        )
      );

      setEditId(null);

      setShowModal(false);

      alert("Asset updated ✅");
    })

    .catch((err) => {
      console.log(err);
      alert("Update failed ❌");
    });

  }

  // ✅ CREATE
  else {

    axios.post(
  "https://asset-management-system-2wz5.onrender.com/api/assets/",
  newAsset,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )

    .then((res) => {

      setAssets([...assets, res.data]);

      setShowModal(false);

      setNewAsset({
  name: "",
  type: "",
  status: "",
  purchase_date: "",
});

      alert("Asset added successfully ");
    })

    .catch((err) => {
  console.log(err.response?.data);
  console.log(err);
  alert(JSON.stringify(err.response?.data));
});
  }
};

  // ✅ DELETE
const handleDelete = (id) => {

  if (!window.confirm("Are you sure?")) return;

  axios.delete(
  `https://asset-management-system-2wz5.onrender.com/api/assets/${id}/`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  )

  .then(() => {
    setAssets(assets.filter((a) => a.id !== id));
  })

  .catch((err) => console.log(err));
};

const handleEdit = (asset) => {
  setNewAsset(asset);
  setEditId(asset.id);
  setShowModal(true);
};

  // ✅ UI
  return (
    <div>

      {/* Header */}
      <div className="d-flex justify-content-between mb-3">
        <h2>Assets</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Add Asset
        </button>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.type}</td>
              <td>{a.status}</td>
              <td>
  <button
    className="btn btn-warning btn-sm me-2"
    onClick={() => handleEdit(a)}
  >
    Edit
  </button>

  <button
    className="btn btn-danger btn-sm"
    onClick={() => handleDelete(a.id)}
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="card p-3 mt-3">
          <h4>{editId ? " Edit Asset" : "Add Asset"}</h4>

          <input
            className="form-control mb-2"
            placeholder="Name"
            value={newAsset.name}
            onChange={(e) =>
              setNewAsset({ ...newAsset, name: e.target.value })
            }
          />

          <input
            className="form-control mb-2"
            placeholder="Type"
            value={newAsset.type}
            onChange={(e) =>
              setNewAsset({ ...newAsset, type: e.target.value })
            }
          />

          <input
  className="form-control mb-2"
  placeholder="Status"
  value={newAsset.status}
  onChange={(e) =>
    setNewAsset({ ...newAsset, status: e.target.value })
  }
/>

<input
  type="date"
  className="form-control mb-2"
  value={newAsset.purchase_date || ""}
  onChange={(e) =>
    setNewAsset({
      ...newAsset,
      purchase_date: e.target.value
    })
  }
/>

<button className="btn btn-success me-2" onClick={handleAdd}>
            {editId ? "Update" : "Save"}
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      )}

    </div>
  );
}

export default Assets;