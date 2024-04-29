import { db } from "../db/conexion.js";


const getAnimal = async (req, res) => {

    const sql = `select * from tbl_animal`;
    const result = await db.query(sql);

    return res.json(result);

}

const postAnimal = async (req, res) => {

    const { name, sonido } = req.body;

    const data = [name, sonido]

    const sql = ` insert into tbl_animal 
                 ( nombre, sonido)
                 values 
                 ($1, $2) returning  *`;

    const result = await db.query(sql, data)

    return res.json({ mensaje: "Insercion Exitosa", obj_creado: result })
}

const putAnimal = async (req, res) => {

    const { id } = req.params;
    const { sonido, name } = req.body;
    const data = [sonido, name, id];

    const sql = ` update tbl_animal 
                    set sonido = $1, 
                    nombre = $2
                    where id = $3 
                    returning * `;

    const result = await db.query(sql, data);

    return res.json({ mensaje: "Actualizacion Exitosa", obj_modificado: result })
}

const deleteAnimal = async (req, res) => {

    const { id } = req.params;
    const sql = `delete from tbl_animal where id = $1 returning * `;
    const data = [id];
    const result = await db.query(sql, data);

    return res.json({ menseje: "Borrado Exitoso", obj_borrado: result });

}

export {
    getAnimal,
    postAnimal,
    putAnimal,
    deleteAnimal
}