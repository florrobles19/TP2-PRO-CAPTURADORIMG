// src/server/server.mjs
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const MONGO_URI = "mongodb+srv://facundoledesma89:jOSwVHw0Hfs1Yohs@weatherapp.mkfsymc.mongodb.net/";
if (!MONGO_URI) {
  throw new Error('La variable de entorno MONGO_URI no está definida');
}
console.log('MONGO_URI:', MONGO_URI);

mongoose.connect(MONGO_URI);

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  nombre: String,
  apellido: String,
  fechaRegistro: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { id, email, nombre, apellido, fechaRegistro } = req.body;

  try {
    const newUser = new User({ id, email, nombre, apellido, fechaRegistro });
    await newUser.save();
    res.json({ success: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      if (error.keyPattern.id) {
        return res.json({ success: false, message: 'El ID ya está en uso' });
      }
      if (error.keyPattern.email) {
        return res.json({ success: false, message: 'El email ya está en uso' });
      }
    }
    res.json({ success: false, message: 'Error en el registro' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
