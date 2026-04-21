import express from 'express';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    crearSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

//  GET todos
router.get('/heroes', obtenerTodosLosSuperheroesController);

//  DELETE por nombre 
router.delete('/heroes/nombre/:nombre', eliminarSuperheroePorNombreController);

//  DELETE por ID
router.delete('/heroes/:id', eliminarSuperheroePorIdController);

//  PUT actualizar
router.put('/heroes/:id', actualizarSuperheroeController);

//  GET por ID 
router.get('/heroes/:id', obtenerSuperheroePorIdController);

//  POST crear
router.post('/heroes', crearSuperheroeController);

export default router;