import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "/src/components/NavBar.jsx";

import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
} from "semantic-ui-react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
            navigate("/lecturerdash");
            break;
          case "student":
            navigate("/studentdash");
            break;
          default:
            setError("Invalid user role:", role);
        }
      } else {
        setError(result.detail);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar/>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <h1 color="teal">Sign In</h1>
          <Form size="large" onSubmit={handleSignIn}>
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
              />
              <Form.Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button color="blue" fluid size="large" type="submit">
                Sign In
              </Button>
            </Segment>
          </Form>
          <Message>
            Don't have an account? <a href="/signup">Sign up</a>
          </Message>
          <div>{error && <p>{error}</p>}</div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SignIn;
