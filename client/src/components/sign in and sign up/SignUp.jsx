import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "/src/components/Header.jsx";

function SignUp({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    onSignUp({ username, password, email });
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <Header />
      <div className="ui container" style={{ marginTop: "10em" }}>
        <form className="ui form">
          <h2>Sign Up</h2>

          <div className="field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/courses">
            <button className="ui primary button">Sign Up</button>
          </Link>
        </form>
        <p>
          Have an account <Link to="/login-page">Sign in</Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
