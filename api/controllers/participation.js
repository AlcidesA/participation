import Participation from '../models/participation';

import { errorMessage, successMessage } from '../helpers/responseHandler';

export default {
  async list(req, res) {
    try {
      const participations = await Participation.findAll();

      participations && res.json(successMessage(participations));
    } catch (error) {
      console.log('err', error);
      return res.json(errorMessage('Erro ao buscar participações'));
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

      response &&
        res.json(successMessage('Participação cadastrada com sucesso!'));
    } catch (error) {
      console.log('err', error);
      return res.json(errorMessage('Erro ao criar participação'));
    }
  }
};
