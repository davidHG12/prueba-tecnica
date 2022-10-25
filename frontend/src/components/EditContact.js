import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:4000/api/contacts/';

const CompEditContact = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async e => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      celular: celular,
      direccion: direccion,
    });
    navigate('/');
  };

  useEffect(() => {
    getContactById();
  }, []);

  const getContactById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setApellido(res.data.apellido);
    setCorreo(res.data.correo);
    setTelefono(res.data.telefono);
    setCelular(res.data.celular);
    setDireccion(res.data.direccion);
  };

  return (
    <div>
      <h3>Editar contacto</h3>
      <form onSubmit={update}>
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
          <textarea
            value={apellido}
            onChange={e => setApellido(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <textarea
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <textarea
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Celular</label>
          <textarea
            value={celular}
            onChange={e => setCelular(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <textarea
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default CompEditContact;
