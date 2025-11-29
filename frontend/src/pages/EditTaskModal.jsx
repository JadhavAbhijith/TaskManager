import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import API from "../api";

export default function EditTaskModal({ show, handleClose, task, refresh }) {
  const { dark } = useOutletContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status || "pending");
    }
  }, [task]);

  const saveChanges = async () => {
    try {
      await API.put(`/tasks/${task._id}`, {
        title,
        description,
        status,
      });

      alert("Task updated!");
      refresh();
      handleClose();
    } catch (err) {
      alert("Failed to update task");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} contentClassName={dark ? "bg-dark text-light" : ""}>
      <Modal.Header closeButton className={dark ? "bg-dark text-light" : ""}>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
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
        </Form>
      </Modal.Body>

      <Modal.Footer className={dark ? "bg-dark text-light" : ""}>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={saveChanges}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
