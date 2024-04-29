import express from 'express';
const app = express();

import { animal } from './routes/routeAnimal.js';
import { personaRouter } from './routes/routePersona.js'; 
import { telefonoRouter } from './routes/routerTelefono.js'; 

// Middleware
app.use(express.json());

// Rutas
app.use('/animal', animal);
app.use('/persona', personaRouter); 
app.use('/telefono', telefonoRouter); 

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
});
