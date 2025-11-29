import React, { useState } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });

      const token = res.data.token;

      localStorage.setItem("token", token);

      // Decode token
      const payload = JSON.parse(atob(token.split(".")[1]));

      localStorage.setItem("role", payload.role);
      localStorage.setItem("userId", payload.userId);

      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: 350 }}>
        <h3 className="text-center mb-3">Login</h3>

        <Form onSubmit={submit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button className="w-100 mb-2" type="submit">Login</Button>

          <Link to="/register" className="text-center d-block">
            Create an Account
          </Link>
        </Form>
      </Card>
    </Container>
  );
}
