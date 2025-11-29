import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import API from "../api";
import EditTaskModal from "../pages/EditTaskModal";

export default function TaskCard({ task, refresh }) {
  const { dark } = useOutletContext();
  const [showModal, setShowModal] = useState(false);

  const del = async () => {
    if (window.confirm("Delete task?")) {
      await API.delete(`/tasks/${task._id}`);
      refresh();
    }
  };

  return (
    <>
      <Card className={`shadow-sm h-100 ${dark ? "bg-dark text-light border-secondary" : ""}`}>
        <Card.Body>
          <Card.Title>
            {task.title}{" "}
            <Badge bg={task.status === "completed" ? "success" : "warning"}>
              {task.status.toUpperCase()}
            </Badge>
          </Card.Title>

          <Card.Text>{task.description}</Card.Text>

          <Button variant="primary" className="me-2" onClick={() => setShowModal(true)}>
            Edit
          </Button>

          <Button variant="danger" onClick={del}>Delete</Button>
        </Card.Body>
      </Card>

      <EditTaskModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        task={task}
        refresh={refresh}
      />
    </>
  );
}
