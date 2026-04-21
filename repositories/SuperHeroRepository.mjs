import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {

  //  GET por ID
async obtenerPorId(id) {
    return await SuperHero.findById(id);
}

  //  GET todos
async obtenerTodos() {
    return await SuperHero.find({});
}

  //  GET por atributo dinámico
async buscarPorAtributo(atributo, valor) {
    return await SuperHero.find({ [atributo]: valor });
}

  //  GET mayores de 30
async obtenerMayoresDe30() {
    return await SuperHero.find({ edad: { $gt: 30 } });
}

  //  CREATE
async crear(datos) {
    const nuevo = new SuperHero(datos);
    return await nuevo.save();
}

  //  UPDATE
async actualizar(id, datos) {
    return await SuperHero.findByIdAndUpdate(
    id,
    datos,
      { new: true } // devuelve el actualizado
    );
}

  //  DELETE por ID
async eliminarPorId(id) {
    return await SuperHero.findByIdAndDelete(id);
}

  //  DELETE por nombre
async eliminarPorNombre(nombre) {
  return await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombre });
}
}

export default new SuperHeroRepository();