import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:4000/api/contacts/';

const CompCreateContact = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();

  //procedimiento guardar
  const store = async e => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      celular: celular,
      direccion: direccion,
    });
    navigate('/');
  };

  return (
    <div>
      <h3>Crear un nuevo contacto</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            value={apellido}
            onChange={e => setApellido(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Celular</label>
          <input
            value={celular}
            onChange={e => setCelular(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CompCreateContact;
