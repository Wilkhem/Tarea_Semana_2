import { db } from "../db/conexion.js";

const getPersona = async (req, res) =>{
    try{
        const sql = `SELECT *FROM persona`;
        const result = await db.query(sql);
        return res.json (result);
    } catch (error){
        console.error('Error al obtener personas', error);
        return res.status(500).json({mesaje: 'Error al obtener persona'});
    }
}

const postPersona = async (req, res) => {
    try {
        const { nombre, apellido, edad, email } = req.body;
        const data = [nombre, apellido, edad, email];
        const sql = `INSERT INTO persona (nombre, apellido, edad, email) VALUES ($1, $2, $3, $4) RETURNING *`;
        const result = await db.query(sql, data);
        return res.json({ mensaje: "Inserción Exitosa", obj_creado: result });
    } catch (error) {
        console.error('Error al insertar persona:', error);
        return res.status(500).json({ mensaje: 'Error al insertar persona' });
    }
}

const putPersona = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, edad, email } = req.body;
        const data = [nombre, apellido, edad, email, id];
        const sql = `UPDATE persona SET nombre = $1, apellido = $2, edad = $3, email = $4 WHERE id = $5 RETURNING *`;
        const result = await db.query(sql, data);
        return res.json({ mensaje: "Actualización Exitosa", obj_modificado: result });
    } catch (error) {
        console.error('Error al actualizar persona:', error);
        return res.status(500).json({ mensaje: 'Error al actualizar persona' });
    }
}

const deletePersona = async (req, res) => {
    try {
        const { id } = req.params;
        const sql = `DELETE FROM persona WHERE id = $1 RETURNING *`;
        const data = [id];
        const result = await db.query(sql, data);
        return res.json({ mensaje: "Borrado Exitoso", obj_borrado: result });
    } catch (error) {
        console.error('Error al borrar persona:', error);
        return res.status(500).json({ mensaje: 'Error al borrar persona' });
    }
}

export {
    getPersona,
    postPersona,
    putPersona,
    deletePersona
}