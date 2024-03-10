import React, { useState } from "react";
import NavBar from "/src/components/NavBar.jsx";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();

      const { role } = result;
      console.log(role);
      if (response.ok) {
        localStorage.getItem("role", role);
        switch (role) {
          case "admin":
            navigate("/admindash/*");
            break;
          case "lecturer":
            navigate("/lecturerdash/*");
            break;
          case "student":
            navigate("/studentdash/*");
            break;
          default:
            setError("Invalid user role:", role);
            window.alert("Invalid user role: " + role);
        }
      } else {
        setError(result.detail);
        window.alert(result.detail);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar />

      <form
        onSubmit={handleSubmit}
        className="ui form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1 style={{ color: "maroon", marginTop: "5em", paddingLeft: "30px" }}>
          Sign In
        </h1>
        <div className="field" style={{ width: "50%" }}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field" style={{ width: "50%" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Show Password
        </div>
        <button
          type="submit"
          className="ui button"
          style={{ backgroundColor: "maroon", color: "white" }}
        >
          Sign In
        </button>
        <p>
          Don't have an account?{" "}
          <a style={{ color: "maroon" }} href="/signup">
            Sign up
          </a>
        </p>
      </form>
      {/* <div style={{}}>{error && <p>{error}</p>}</div> */}
    </div>
  );
}

export default SignIn;
