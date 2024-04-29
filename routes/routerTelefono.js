import express from 'express';
const telefonoRouter = express.Router();
import { getTelefonos, postTelefono, putTelefono, deleteTelefono } from '../controllers/controllersTelefono.js';

// Obtener todos los teléfonos
telefonoRouter.get('/', getTelefonos);

// Crear un nuevo teléfono
telefonoRouter.post('/', postTelefono);

// Actualizar los datos de un teléfono
telefonoRouter.put('/:id', putTelefono);

// Eliminar un teléfono
telefonoRouter.delete('/:id', deleteTelefono);

export { telefonoRouter };
