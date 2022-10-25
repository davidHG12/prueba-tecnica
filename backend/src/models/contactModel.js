import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const contactModel = db.define('tb_contacts', {
  id: {
    type: DataTypes.BIGINT(20),
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: { type: DataTypes.STRING },
  apellido: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
  celular: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
});
export default contactModel;
