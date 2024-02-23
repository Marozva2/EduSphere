import React, { useState } from "react";
import Header from "/src/components/Header.jsx";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    onSignIn(username, password);
  };

  return (
    <>
      <Header />
      <div className="ui container" style={{ marginTop: "10em" }}>
        <form className="ui form">
          <h2>Sign In</h2>
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
            <button className="ui primary button">Sign In</button>
          </Link>
          <p>
            Don't have an account <Link to="/sign-up">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
