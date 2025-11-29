import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import API from "../api";
import TaskCard from "../components/TaskCard";

export default function ViewTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert("Failed to load tasks");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) return <div className="text-center mt-5"><Spinner /></div>;

  return (
    <Container className="mt-3">
      <Row>
        {tasks.map((t) => (
          <Col key={t._id} md={4} className="mb-3">
            <TaskCard task={t} refresh={loadTasks} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
