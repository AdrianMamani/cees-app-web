import React, { useState } from 'react';

export default function CrearUsuario() {
  const [formularioActivo, setFormularioActivo] = useState('estudiante');
  const [foto, setFoto] = useState(null);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFoto(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: 30px auto;
          background-color: #f7f9fb;
          padding: 50px;
        }

        h2 {
          color: #238F7E;
          margin-bottom: 20px;
          font-size: 28px;
          font-weight: 700;
          text-align: left;
        }

        .tabs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }

        .tab-button {
        
          padding: 0;
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          color: #666;
          position: relative;
        }

        .tab-button.active {
          color: #007bff;
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: -11px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #007bff;
        }

        .card {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          margin-bottom: 2px;
        }

        .section-title {
          font-weight: 600;
          margin-bottom: 16px;
        }

        .foto-perfil {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .upload-button {
          background-color: #0072ce;
          color: white;
          padding: 8px 16px;
          border-radius: 5px;
          font-weight: 500;
          display: inline-block;
          cursor: pointer;
        }

        .upload-note {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
        }

        #foto {
          display: none;
        }

        .form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        /* NEW: Container for birth date and email */
        .date-email-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          grid-column: span 2;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 14px;
          margin-bottom: 6px;
        }

        .form-group input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 20px;
          grid-column: 1 / -1;
        }

        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          border: none;
          cursor: pointer;
        }

        .btn.cancelar {
          background-color: #e0e0e0;
        }

        .btn.crear {
          background-color: #2e7d32;
          color: white;
        }
      `}</style>

      <div className="container">
        <h2>Crear usuario</h2>

        <div className="tabs">
          <button
            className={`tab-button ${formularioActivo === 'estudiante' ? 'active' : ''}`}
            onClick={() => setFormularioActivo('estudiante')}
          >
            Crear Estudiante
          </button>
          <button
            className={`tab-button ${formularioActivo === 'profesor' ? 'active' : ''}`}
            onClick={() => setFormularioActivo('profesor')}
          >
            Crear Profesor
          </button>
        </div>

        {formularioActivo === 'profesor' ? (
          <>
            <div className="card">
              <p className="section-title">Foto de perfil</p>
              <div className="foto-perfil">
                <div className="circle">
                  {foto ? <img src={foto} alt="preview" /> : <span>📷</span>}
                </div>
                <div>
                  <label htmlFor="foto" className="upload-button">📁 Subir foto</label>
                  <input type="file" id="foto" onChange={handleFotoChange} />
                  <div className="upload-note">JPG o PNG. Máximo 5 MB.</div>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="section-title">Información personal</p>
              <form className="form">
                <div className="form-group">
                  <label>Nombre *</label>
                  <input type="text" placeholder="Ej: Juan" />
                </div>
                <div className="form-group">
                  <label>Apellido *</label>
                  <input type="text" placeholder="Ej: García" />
                </div>
                <div className="form-group">
                  <label>Teléfono *</label>
                  <input type="text" placeholder="Ejemplo: 51998534351" />
                </div>
                
                {/* Modified: Birth date and email side by side */}
                <div className="date-email-container">
                  <div className="form-group">
                    <label>Fecha de nacimiento *</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="Ej: ejemplo@gmail.com" />
                  </div>
                </div>

                <div className="actions">
                  <button type="button" className="btn cancelar">Cancelar</button>
                  <button type="submit" className="btn crear">Crear Profesor</button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="card">
              <p className="section-title">Foto de perfil</p>
              <div className="foto-perfil">
                <div className="circle">
                  {foto ? <img src={foto} alt="preview" /> : <span>📷</span>}
                </div>
                <div>
                  <label htmlFor="foto" className="upload-button">📁 Subir foto</label>
                  <input type="file" id="foto" onChange={handleFotoChange} />
                  <div className="upload-note">JPG o PNG. Máximo 5 MB.</div>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="section-title">Información personal</p>
              <form className="form">
                <div className="form-group">
                  <label>Nombre *</label>
                  <input type="text" placeholder="Ej: Juan" />
                </div>
                <div className="form-group">
                  <label>Apellido *</label>
                  <input type="text" placeholder="Ej: García" />
                </div>
                <div className="form-group">
                  <label>Teléfono *</label>
                  <input type="text" placeholder="Ejemplo: 51998534351" />
                </div>
                
                {/* Modified: Birth date and email side by side */}
                <div className="date-email-container">
                  <div className="form-group">
                    <label>Fecha de nacimiento *</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="Ej: ejemplo@gmail.com" />
                  </div>
                </div>

                <div className="actions">
                  <button type="button" className="btn cancelar">Cancelar</button>
                  <button type="submit" className="btn crear">Crear Estudiante</button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}