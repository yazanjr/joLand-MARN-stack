import { useEffect, useState, useMemo } from "react";
import { getLands, createLand, updateLand, deleteLand } from "../api/lands";
import LandForm from "../components/LandForm";

export default function AdminDashboard() {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState(null);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    setLoading(true);
    const data = await getLands();
    setLands(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return lands;
    return lands.filter(
      (l) =>
        l.location.toLowerCase().includes(q) ||
        (l.description || "").toLowerCase().includes(q) ||
        String(l.size || "").includes(q)
    );
  }, [lands, search]);

  const handleCreate = async (fd) => {
    await createLand(fd);
    setMode(null);
    load();
  };

  const handleUpdate = async (fd) => {
    await updateLand(editing._id, fd);
    setMode(null);
    setEditing(null);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await deleteLand(id);
    load();
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Panel — Lands</h1>

      <div className="search-bar">
        <input
          placeholder="Search by location, description, or size"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setMode("create")}>+ New Land</button>
      </div>

      {mode === "create" && (
        <div className="form-container">
          <LandForm onCancel={() => setMode(null)} onSubmit={handleCreate} />
        </div>
      )}

      {mode === "edit" && editing && (
        <div className="form-container">
          <LandForm
            initial={editing}
            onCancel={() => {
              setMode(null);
              setEditing(null);
            }}
            onSubmit={handleUpdate}
          />
        </div>
      )}

      {loading ? (
        <p className="loading">Loading…</p>
      ) : (
        <>
          {/* Desktop table */}
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Location</th>
                  <th>Size (m²)</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => (
                  <tr key={l._id}>
                    <td>
                      {l.photo ? (
                        <img
                          src={`${process.env.REACT_APP_API_URL}${l.photo}`}
                          alt="land"
                        />
                      ) : (
                        <span>—</span>
                      )}
                    </td>
                    <td>{l.location}</td>
                    <td>{l.size}</td>
                    <td>
                      {l.description?.length > 40
                        ? l.description.slice(0, 40) + "..."
                        : l.description}
                    </td>
                    <td>
                      <div className="btn-group">
                        <button
                          className="edit-btn"
                          onClick={() => {
                            setEditing(l);
                            setMode("edit");
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(l._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mobile-list">
            {filtered.map((l) => (
              <div className="land-card" key={l._id}>
                {l.photo && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}${l.photo}`}
                    alt="land"
                    className="land-photo"
                  />
                )}
                <p>
                  <b>Location:</b> {l.location}
                </p>
                <p>
                  <b>Size:</b> {l.size} m²
                </p>
                <p>
                  <b>Description:</b>{" "}
                  {l.description?.length > 40
                    ? l.description.slice(0, 40) + "..."
                    : l.description}
                </p>
                <div className="btn-group">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditing(l);
                      setMode("edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(l._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
