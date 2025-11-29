import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import API from "../api";

export default function CreateTask() {
  const { dark } = useOutletContext();   // get dark mode state

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", { title, description, status });
      alert("Task created!");
      setTitle("");
      setDescription("");
      setStatus("pending");
    } catch (err) {
      alert("Task create failed");
    }
  };

  return (
    <Container className="mt-3">
      <Card className={`p-3 shadow-lg ${dark ? "bg-dark text-light" : ""}`}>
        <h3>Create New Task</h3>

        <Form onSubmit={submit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              className={dark ? "bg-secondary text-light" : ""}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className={dark ? "bg-secondary text-light" : ""}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select
              className={dark ? "bg-secondary text-light" : ""}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="w-100 mt-3">
            Create Task
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
