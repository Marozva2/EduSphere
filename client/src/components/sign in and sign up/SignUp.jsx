import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import Header from "/src/components/Header.jsx";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  // const history = useHistory();

  const handleSignUp = async (event) => {
    event.preventDefault();
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
        // history.push("/login-page");
      } else {
        setError(data.detail);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="ui container" style={{ marginTop: "10em" }}>
        <form className="ui form" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          {error && <p>{error}</p>}
          <div className="inline fields">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inline fields">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inline fields">
            <label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="lecturer">Lecturer</option>
                <option value="student">Student</option>
              </select>
            </label>
          </div>
          <div className="inline fields">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inline fields">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="ui primary button" type="submit">
            Sign Up
          </button>
          <p>
            Have an account? <Link to="/login-page">Sign in</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
