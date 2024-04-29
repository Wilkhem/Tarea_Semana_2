import express from 'express';
const personaRouter = express.Router();
import { getPersona, postPersona, putPersona, deletePersona } from '../controllers/controllerPersona.js';
import { telefonoRouter } from './routerTelefono.js'; // Importar las rutas de teléfonos

// Obtener todas las personas
personaRouter.get('/', getPersona);

// Crear una nueva persona
personaRouter.post('/', postPersona);

// Actualizar los datos de una persona
personaRouter.put('/:id', putPersona);

// Eliminar una persona
personaRouter.delete('/:id', deletePersona);

// Usar las rutas de teléfonos
personaRouter.use('/:id/telefonos', telefonoRouter);

export { personaRouter };
