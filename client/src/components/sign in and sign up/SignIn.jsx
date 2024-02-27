import React, { useState } from "react";
import Header from "/src/components/Header.jsx";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
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
        <form className="ui form" onSubmit={handleSignIn}>
          <div>
            <h2>Sign In</h2>
          </div>
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
              // required
            />
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
          <button className="ui primary button" type="submit">
            Sign In
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
