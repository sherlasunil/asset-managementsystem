import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {

    axios.post(
  "https://asset-management-system-2wz5.onrender.com/api/token/",
  formData
)

      .then((res) => {

  console.log("LOGIN RESPONSE:", res.data);

  localStorage.setItem("token", res.data.access);

  console.log("TOKEN SAVED:", localStorage.getItem("token"));

  alert("Login Successful ✅");

  navigate("/dashboard");
})

      .catch((err) => {

  console.log("LOGIN ERROR:", err.response?.data);

  alert(JSON.stringify(err.response?.data));
});
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">

      <div
        className="card p-4 shadow-lg border-0"
        style={{ width: "350px", borderRadius: "15px" }}
      >

        <h3 className="text-center mb-4 fw-bold">
          Login
        </h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value
            })
          }
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
        />

        <button
          className="btn btn-primary w-100 fw-bold"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;