import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

export default function AppNavbar({ onToggleDark, dark }) {
  // 'dark' and 'onToggleDark' are passed from Dashboard only (so login/register unaffected)
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  return (
    <Navbar bg={dark ? "dark" : "primary"} variant={dark ? "dark" : "light"} className="px-3">
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand href="/dashboard">Task Manager</Navbar.Brand>

        <div className="d-flex align-items-center gap-2">
          <Button variant={dark ? "outline-light" : "light"} size="sm" onClick={onToggleDark}>
            {dark ? "Light" : "Dark"}
          </Button>
          <Button variant="outline-light" size="sm" onClick={logout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
