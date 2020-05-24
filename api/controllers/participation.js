import Participation from '../models/participation';

export default {
  async list(req, res) {
    try {
      const participations = await Participation.findAll();

      participations && res.json(participations);
    } catch (error) {
      console.log('err', error);
      return res.json('Erro ao buscar participações');
    }
  },

  async create(req, res) {
    try {
      const { firstName, lastName, participation } = req.body;

      let response = await Participation.create({
        firstName,
        lastName,
        participation
      });

      response && res.json('Participação cadastrada com sucesso!');
    } catch (error) {
      console.log('err', error);
      return res.json('Erro ao criar participação');
    }
  }
};
