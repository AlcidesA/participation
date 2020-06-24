import Participation from '../models/participation';

export default {
  async list(req, res) {
    try {
      const participations = await Participation.findAll();

      participations && res.status(200).json(participations);
    } catch (error) {
      console.log('err', error);
      return res.status(500).json('Erro ao buscar participações');
    }
  },

  async create(req, res) {
    try {
      const { firstName, lastName, participation } = req.body;

      if (!(firstName && lastName && participation)) {
        return res.status(400).json('Erro ao cadastrar participação');
      }

      let p = await Participation.create({
        firstName,
        lastName,
        participation
      });

      let response = {
        id: p.dataValues.id,
        firstName: p.dataValues.firstName,
        lastName: p.dataValues.lastName,
        participation: p.dataValues.participation
      };

      response && res.status(200).json(response);
    } catch (error) {
      console.log('err', error);
      return res.status(500).json('Erro ao criar participação');
    }
  },

  async delete(req, res) {
    try {
      let response = await Participation.destroy({
        where: {
          id: req.params.id
        }
      });

      response && res.status(200).json('Participação removida com sucesso');
    } catch (error) {
      console.log('err', error);
      return res.status(500).json('Erro ao deletar participação');
    }
  }
};
