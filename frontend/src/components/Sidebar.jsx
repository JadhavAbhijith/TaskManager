import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Sidebar({ dark }) {
  const role = localStorage.getItem("role");
  // keep below navbar (56px)
  const style = {
    width: 250,
    minHeight: "calc(100vh - 56px)",
    backgroundColor: dark ? "#222" : "#f8f9fa",
    color: dark ? "#fff" : "#000",
    padding: 20,
    marginTop: 56,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={style}>
      <h5 style={{ color: dark ? "#fff" : "#000" }}>Menu</h5>

      <Link to="/dashboard/create" className="mb-2">
        <Button className="w-100 mb-2">Create Task</Button>
      </Link>

      <Link to="/dashboard/view" className="mb-2">
        <Button className="w-100 mb-2">View Tasks</Button>
      </Link>

      {role === "admin" && (
        <Link to="/admin" className="mb-2">
          <Button variant="warning" className="w-100">Admin Dashboard</Button>
        </Link>
      )}

      <div style={{ marginTop: "auto" }}>
        <Button variant="success" className="w-100">Save</Button>
      </div>
    </div>
  );
}
