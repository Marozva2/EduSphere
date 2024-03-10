import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/NavBar.jsx";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    checkFormValidity();

    if (!formValid) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          role,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");
        setError(null);
        navigate("/login");
      } else {
        setError(data.detail);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkFormValidity = () => {
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      role.trim() !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "role":
        setRole(value);
        break;
      default:
        break;
    }
    // checkFormValidity();
  };

  return (
    <>
      <Header />
      <div className="contain" style={{ marginTop: "5em" }}>
        <form
          onSubmit={handleSignUp}
          className="ui form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 style={{ color: "maroon", paddingLeft: "30px" }}>Sign Up</h1>
          <div className="fields" style={{ width: "50%" }}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields" style={{ width: "50%" }}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields" style={{ width: "50%" }}>
            <select
              value={role}
              onChange={handleInputChange}
              name="role"
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">admin</option>
              <option value="Lecturer">lecturer</option>
              <option value="Student">student</option>
            </select>
          </div>
          <div className="fields" style={{ width: "50%" }}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="fields" style={{ width: "50%" }}>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

            <button
              type="submit"
              className="ui button"
              style={{ backgroundColor: "maroon", color: "white" }}
            >
              Sign Up
            </button>
          
          <p>
            Already have an account?{" "}
            <a style={{ color: "maroon" }} href="/login">
              Sign in
            </a>{" "}
            here!
          </p>
        </form>
        <div>{error && <p>{error}</p>}</div>
      </div>
    </>
  );
}

export default SignUp;
