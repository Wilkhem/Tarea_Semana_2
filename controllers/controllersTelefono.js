import { db } from "../db/conexion.js";

// Obtener todos los teléfonos
const getTelefonos = async (req, res) => {
    try {
        const sql = `SELECT * FROM Telefono`;
        const result = await db.query(sql);
        return res.json(result);
    } catch (error) {
        console.error('Error al obtener teléfonos:', error);
        return res.status(500).json({ mensaje: 'Error al obtener teléfonos' });
    }
}

// Crear un nuevo teléfono
const postTelefono = async (req, res) => {
    try {
        const { numero, id_persona } = req.body;
        const data = [numero, id_persona];
        const sql = `INSERT INTO Telefono (numero, id_persona) VALUES ($1, $2) RETURNING *`;
        const result = await db.query(sql, data);
        return res.json({ mensaje: "Inserción Exitosa", obj_creado: result });
    } catch (error) {
        console.error('Error al insertar teléfono:', error);
        return res.status(500).json({ mensaje: 'Error al insertar teléfono' });
    }
}

// Actualizar los datos de un teléfono
const putTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const { numero, id_persona } = req.body;
        const data = [numero, id_persona, id];
        const sql = `UPDATE Telefono SET numero = $1, id_persona = $2 WHERE id = $3 RETURNING *`;
        const result = await db.query(sql, data);
        return res.json({ mensaje: "Actualización Exitosa", obj_modificado: result });
    } catch (error) {
        console.error('Error al actualizar teléfono:', error);
        return res.status(500).json({ mensaje: 'Error al actualizar teléfono' });
    }
}

// Eliminar un teléfono
const deleteTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = `DELETE FROM Telefono WHERE id = $1 RETURNING *`;
        const data = [id];
        const result = await db.query(sql, data);
        return res.json({ mensaje: "Borrado Exitoso", obj_borrado: result });
    } catch (error) {
        console.error('Error al borrar teléfono:', error);
        return res.status(500).json({ mensaje: 'Error al borrar teléfono' });
    }
}

export { getTelefonos, postTelefono, putTelefono, deleteTelefono };
