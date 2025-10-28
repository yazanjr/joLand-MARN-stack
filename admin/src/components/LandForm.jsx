import { useState, useEffect } from "react";

export default function LandForm({ initial, onCancel, onSubmit }) {
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (initial) {
      setLocation(initial.location || "");
      setSize(initial.size || "");
      setDescription(initial.description || "");
    }
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("location", location);
    fd.append("size", size);
    fd.append("description", description);
    if (photo) fd.append("photo", photo);
    onSubmit(fd);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'grid',
        gap: '1.5rem',
      }}
    >
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Location:
        </label>
        <input 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            transition: 'border-color 0.2s',
            outline: 'none',
            '&:focus': {
              borderColor: '#4CAF50',
              boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.1)'
            }
          }}
          placeholder="Enter location"
        />
      </div>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Size (m²):
        </label>
        <input 
          type="number" 
          value={size} 
          onChange={(e) => setSize(e.target.value)} 
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            transition: 'border-color 0.2s',
            outline: 'none',
            '&:focus': {
              borderColor: '#4CAF50',
              boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.1)'
            }
          }}
          placeholder="Enter size in square meters"
        />
      </div>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Description:
        </label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          rows={4}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            transition: 'border-color 0.2s',
            outline: 'none',
            resize: 'vertical',
            minHeight: '100px',
            '&:focus': {
              borderColor: '#4CAF50',
              boxShadow: '0 0 0 3px rgba(76, 175, 80, 0.1)'
            }
          }}
          placeholder="Enter description"
        />
      </div>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label style={{
          fontSize: '0.875rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Photo:
        </label>
        <div style={{
          width: '100%',
          minHeight: '120px',
          border: '2px dashed #e2e8f0',
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          position: 'relative',
          backgroundColor: '#f8f9fa',
          transition: 'all 0.3s ease'
        }}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setPhoto(e.target.files[0])}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
              zIndex: 2
            }}
          />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#4CAF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <svg 
                style={{
                  width: '24px',
                  height: '24px',
                  fill: 'white'
                }}
                viewBox="0 0 24 24"
              >
                <path d="M21 19V5c0-2.21-1.79-4-4-4H7C4.79 1 3 2.79 3 5v14c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4zM5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5zm7 14c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/>
              </svg>
            </div>
            <div style={{
              textAlign: 'center'
            }}>
              <div style={{
                color: '#4a5568',
                fontWeight: '500',
                marginBottom: '0.25rem'
              }}>
                {photo ? 'Change photo' : 'Upload photo'}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#718096'
              }}>
                Click or drag and drop your image
              </div>
            </div>
          </div>
        </div>
        {photo && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0.75rem',
            backgroundColor: '#f0fdf4',
            borderRadius: '0.375rem',
            color: '#166534',
            fontSize: '0.875rem'
          }}>
            <svg 
              style={{
                width: '16px',
                height: '16px',
                fill: 'currentColor'
              }}
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>{photo.name}</span>
          </div>
        )}
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem',
        justifyContent: 'flex-end'
      }}>
        <button 
          type="button" 
          onClick={onCancel}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            border: '1px solid #e2e8f0',
            backgroundColor: 'white',
            color: '#4a5568',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              backgroundColor: '#f8f9fa'
            }
          }}
        >
          Cancel
        </button>
        <button 
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              backgroundColor: '#43a047'
            }
          }}
        >
          {initial ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
