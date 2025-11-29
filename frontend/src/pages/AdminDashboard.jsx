import React, { useEffect, useState } from "react";
import API from "../api";
import { Container, Table, Button, Spinner, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const dark = localStorage.getItem("dashboard_theme") === "dark";

  const load = async () => {
    setLoading(true);
    try {
      const res = await API.get("/auth/admin/dashboard");
      setUsers(res.data.users || []);
      setTasks(res.data.tasks || []);
    } catch (err) {
      alert("Unauthorized");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await API.delete(`/auth/admin/user/${id}`);
    load();
  };

  const toggleRole = async (user) => {
    const newRole = user.role === "admin" ? "user" : "admin";
    await API.put(`/auth/admin/user/${user._id}/role`, { role: newRole });
    load();
  };

  if (loading) return <div className="mt-5 text-center"><Spinner /></div>;

  return (
    <Container className="mt-4">
      <Card className={dark ? "bg-dark text-light" : ""} style={{ padding: 20 }}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>Admin Dashboard</h3>
          <Button variant="secondary" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
        <p className="text-muted">Manage users and view all tasks</p>
      </Card>

      <h4 className={dark ? "text-light mt-4" : "mt-4"}>Users</h4>
      <Table
        bordered
        hover
        responsive
        className={dark ? "table-dark" : ""}
        style={dark ? { backgroundColor: "#222", color: "white" } : {}}
      >
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td><strong>{u.role}</strong></td>
              <td>
                <Button
                  size="sm"
                  className="me-2"
                  onClick={() => toggleRole(u)}
                >
                  {u.role === "admin" ? "Revoke Admin" : "Make Admin"}
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteUser(u._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className={dark ? "text-light mt-4" : "mt-4"}>All Tasks</h4>
      <Table
        bordered
        hover
        responsive
        className={dark ? "table-dark" : ""}
        style={dark ? { backgroundColor: "#222", color: "white" } : {}}
      >
        <thead>
          <tr>
            <th>Title</th><th>User</th><th>Description</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td>{t.user?.name} ({t.user?.email})</td>
              <td>{t.description}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
