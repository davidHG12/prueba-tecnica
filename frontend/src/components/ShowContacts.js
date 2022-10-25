import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:4000/api/contacts/';

const CompShowContacts = () => {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const res = await axios.get(URI);
    setContact(res.data);
  };

  const deleteContact = async id => {
    await axios.delete(`${URI}${id}`);
    getContacts();
    getContacts();
  };

  const alternar = id => {
    let boton = document.getElementById('boton' + id);
    let cambio = document.getElementById(id);
    if (cambio.style.display === 'inline') {
      cambio.style.display = 'none';
      boton.textContent = 'Mostrar';
    } else {
      cambio.style.display = 'inline';
      boton.textContent = 'Ocultar';
    }
  };

  return (
    <div className="container">
      {contacts.map(contact => (
        <div
          className="card"
          style={{ marginBottom: '10px' }}
          key={contact.nombre}
        >
          <div className="card-content">
            <div className="media" style={{ alignItems: 'center' }}>
              <div
                className="media-left"
                style={{
                  paddingRight: '20px',
                  marginRight: '20px',
                  borderRight: '2px solid rgba(10, 10, 10, 0.2)',
                }}
              >
                <figure className="image is-48x48">
                  <img
                    src="https://img-19.ccm.net/k17mPetcx5Vjofby7LMj61XTSOI=/300x/smart/d6f67f5cdba34e5297e6d8c47e384169/ccmcms-esccm/34211459.png"
                    alt={contact.nombre}
                    className="is-rounded"
                  />
                </figure>
              </div>
              <div className="media-content" style={{ overflow: 'hidden' }}>
                <p className="title is-4 is-capitalized">
                  {contact.nombre /*.charAt(0).toUpperCase() + name.slice(1)*/}{' '}
                  {
                    contact.apellido /*.charAt(0).toUpperCase() + lastName.slice(1)*/
                  }
                </p>
                <p className="subtitle is-6 is-capitalized">{contact.correo}</p>
              </div>
              <button
                id={'boton' + contact.id}
                className="btn btn-primary"
                style={{ marginRight: '15px' }}
                onClick={() => alternar(contact.id)}
              >
                Mostrar
              </button>
              <button
                className="delete is-medium"
                style={{
                  float: 'right',
                }}
                onClick={() => deleteContact(contact.id)}
              />
            </div>
          </div>
          <div
            id={contact.id}
            className="card"
            style={{
              display: 'none',
            }}
          >
            <table className="table">
              <tbody>
                <tr>
                  <div className="card-content">
                    <td
                      style={{
                        width: '34%',
                        textAlign: 'center',
                      }}
                    >
                      <div className="panel-block">
                        <div className="content">
                          <label
                            className="label"
                            style={{
                              display: 'inline-block',
                              width: '100px',
                              paddingRight: '20px',
                              marginRight: '10px',
                              marginBottom: '0',
                              textAlign: 'right',
                            }}
                          >
                            Celular:
                          </label>{' '}
                          <p>{contact.celular}</p>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        width: '34%',
                        textAlign: 'center',
                      }}
                    >
                      <div className="panel-block">
                        <div className="content">
                          <label
                            className="label has-text-right"
                            style={{
                              display: 'inline-block',
                              width: '100px',
                              paddingRight: '20px',
                              marginRight: '10px',
                              marginBottom: '0',
                              textAlign: 'right',
                            }}
                          >
                            Telefono:
                          </label>{' '}
                          <p>{contact.telefono}</p>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        width: '34%',
                        textAlign: 'center',
                      }}
                    >
                      <div className="panel-block">
                        <div className="content">
                          <label
                            className="label has-text-right"
                            style={{
                              display: 'inline-block',
                              width: '100px',
                              paddingRight: '20px',
                              marginRight: '10px',
                              marginBottom: '0',
                              textAlign: 'right',
                            }}
                          >
                            Direccion:
                          </label>{' '}
                          <p>{contact.direccion}</p>
                        </div>
                      </div>
                    </td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-info"
                      style={{ marginTop: '-10px' }}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompShowContacts;
