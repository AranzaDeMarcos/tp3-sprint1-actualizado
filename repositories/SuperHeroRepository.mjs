import SuperHero from '../model/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    // TODO: Implementar lógica de búsqueda por atributo
  return await SuperHero.find({ [atributo]: valor });
  }

  async obtenerMayoresDe30() {
    // TODO: Implementar lógica para filtrar héroes mayores de 30 años
  return await SuperHero.find({ edad: { $gt: 30 } });
  }
  async crearSuperHeroe(superHeroeData) {
  const nuevoHeroe = new SuperHero(superHeroeData);
  return await nuevoHeroe.save();
}
async actualizarSuperHeroe(id, datosActualizados) {
  return await SuperHero.findByIdAndUpdate(id, datosActualizados, { new: true });
}

}

export default new SuperHeroRepository();

