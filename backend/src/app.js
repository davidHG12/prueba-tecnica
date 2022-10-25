import express, { json, urlencoded } from 'express';
import contactsRouter from './routes/contacts.js';
import db from './db/db.js';
import cors from 'cors';

const app = express();

const PORT = 4000;

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use('/api', contactsRouter);

try {
  await db.authenticate();
  console.log('Conexión exitosa a db');
} catch (error) {
  console.log(error);
}

function onStart() {
  console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

export default app;
