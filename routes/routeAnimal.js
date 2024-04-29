//const express = require('express');
import express from 'express';
const animal = express();
import { getAnimal, 
        postAnimal, 
        putAnimal, 
        deleteAnimal } from '../controllers/controllerAnimal.js'; 

// Seleccionar informacion o darle informacion al cliente
animal.get('/', getAnimal);


// creacion de animales 
animal.post('/', postAnimal)

//put actualizar objetos 

animal.put('/:id',putAnimal )

// borrar registros 

animal.delete('/:id', deleteAnimal);

export {
    animal
}