import pg from 'pg-promise'
const pgp = pg();

const cnstr = `postgresql://postgres:HarrozConHuevo8$@localhost:5432/postgres`;

const db = pgp(cnstr);

db.connect()
.then( ()=>{
    console.log("Conexion de Base de Datos exitosa");
} )
.catch((err)=>{
    console.log(`Error de conexion ${err}`)
})

export { db }