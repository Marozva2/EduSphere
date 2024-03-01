import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/NavBar.jsx";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  return (
    <div>
      <Header />
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <h1 color="teal">Sign In</h1>
          <Form size="large" onSubmit={handleSignUp}>
            <Segment stacked style={{ width: "300%" }}>
              <Form.Input
                fluid
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Form.Input
                fluid
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Select
                fluid
                placeholder="Select a role"
                options={[
                  { key: "a", text: "admin", value: "admin" },
                  { key: "l", text: "lecturer", value: "lecturer" },
                  { key: "s", text: "student", value: "student" },
                ]}
                value={role}
                onChange={(e, { value }) => setRole(value)}
                required
              />
              <Form.Input
                fluid
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Input
                fluid
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Button color="blue" fluid size="large" type="submit">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Have an account? <Link to="/login">Sign in</Link>
          </Message>
          <div>{error && <p>{error}</p>}</div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SignUp;
