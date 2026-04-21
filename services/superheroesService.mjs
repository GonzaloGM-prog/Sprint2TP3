import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}
//  CREATE
export async function crearSuperheroe(datos) {
    return await superHeroRepository.crear(datos);
}


//  UPDATE
export async function actualizarSuperheroe(id, datos) {
    return await superHeroRepository.actualizar(id, datos);
}


// DELETE por ID
export async function eliminarSuperheroePorId(id) {
    return await superHeroRepository.eliminarPorId(id);
}


// DELETE por nombre
export async function eliminarSuperheroePorNombre(nombre) {
    return await superHeroRepository.eliminarPorNombre(nombre);
}
