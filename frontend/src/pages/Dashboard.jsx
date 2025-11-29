import React, { useEffect, useState } from "react";
import AppNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import API from "../api";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Dashboard() {
  // dark mode only for dashboard + admin
  const saved = localStorage.getItem("dashboard_theme") === "dark";
  const [dark, setDark] = useState(saved);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    document.body.style.background = dark ? "#121212" : "";
    document.body.style.color = dark ? "#eaeaea" : "";
    localStorage.setItem("dashboard_theme", dark ? "dark" : "light");
  }, [dark]);

  // load user tasks to calculate stats
  const loadStats = async () => {
    try {
      const res = await API.get("/tasks");
      const tasks = res.data || [];
      const total = tasks.length;
      const completed = tasks.filter((t) => t.status === "completed").length;
      const pending = total - completed;
      setStats({ total, completed, pending });
    } catch (err) {
      console.error("Stats load error", err);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const toggleDark = () => setDark((d) => !d);

  return (
    <>
      <AppNavbar onToggleDark={toggleDark} dark={dark} />
      <div style={{ display: "flex" }}>
        <Sidebar dark={dark} />

        <div style={{ flexGrow: 1, padding: 20, marginTop: 56 }}>
          <Container fluid>
            <Row className="mb-4">
              <Col md={4}>
                <Card className={dark ? "bg-dark text-light" : ""}>
                  <Card.Body>
                    <Card.Title>Total Tasks</Card.Title>
                    <h2>{stats.total}</h2>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={dark ? "bg-dark text-light" : ""}>
                  <Card.Body>
                    <Card.Title>Completed</Card.Title>
                    <h2>{stats.completed}</h2>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={dark ? "bg-dark text-light" : ""}>
                  <Card.Body>
                    <Card.Title>Pending</Card.Title>
                    <h2>{stats.pending}</h2>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* nested router outlet */}
            
            <Outlet context={{ dark }} />

          </Container>
        </div>
      </div>
    </>
  );
}
