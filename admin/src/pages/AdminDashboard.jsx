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
    <div className="admin-dashboard" style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{
        fontSize: '2rem',
        color: '#2c3e50',
        marginBottom: '2rem',
        borderBottom: '2px solid #e9ecef',
        paddingBottom: '1rem'
      }}>Admin Panel — Lands</h1>

      <div style={{ 
        display: "flex",
        gap: 15,
        marginBottom: 30,
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <input
          placeholder="Search by location, description, or size"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ 
            flex: 1,
            padding: '0.5rem 1rem',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        />
        <button 
          onClick={() => setMode("create")}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
        >+ New Land</button>
      </div>

      {mode === "create" && (
        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <LandForm onCancel={() => setMode(null)} onSubmit={handleCreate} />
        </div>
      )}

      {mode === "edit" && editing && (
        <div style={{ 
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
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
        <p style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>Loading…</p>
      ) : (
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <table style={{ 
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Photo</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Location</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Size (m²)</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Description</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l._id} style={{ 
                  borderBottom: '1px solid #dee2e6',
                  '&:hover': { backgroundColor: '#f8f9fa' }
                }}>
                  <td style={{ padding: '1rem' }}>
                    {l.photo ? (
                      <img
                        src={`${process.env.REACT_APP_API_URL}${l.photo}`}
                        alt="land"
                        style={{ 
                          width: 80,
                          height: 60,
                          objectFit: "cover",
                          borderRadius: '4px'
                        }}
                      />
                    ) : (
                      <span style={{ color: '#6c757d' }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: '1rem' }}>{l.location}</td>
                  <td style={{ padding: '1rem' }}>{l.size}</td>
                  <td style={{ padding: '1rem' }}>{l.description}</td>
                  <td style={{ padding: '1rem' }}>
                    <button
                      onClick={() => {
                        setEditing(l);
                        setMode("edit");
                      }}
                      style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '0.5rem'
                      }}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(l._id)}
                      style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
