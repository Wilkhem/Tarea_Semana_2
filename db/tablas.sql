-- Active: 1698945600332@@127.0.0.1@5432@postgres@public

create table tbl_animal 
(
    id serial PRIMARY KEY,
    nombre varchar(250), 
    sonido varchar(20)
);
create table persona(
id serial PRIMARY KEY,
nombre varchar (250),
apellido varchar(250),
edad INT,
correo varchar(250)
);

CREATE TABLE Telefono (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(20),
    id_persona INT,
    FOREIGN KEY (id_persona) REFERENCES Persona(id)
);

