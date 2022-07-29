const { Borough } = require('../models')

const getAllBoroughs = async (req, res) => {
  try {
      const boroughs = await Borough.find()
      return res.status(200).json({ boroughs })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


const getBoroughById = async (req, res) => {
  try {
      const { id } = req.params;
      const borough = await Borough.findById(id)
      if (borough) {
          return res.status(200).json({ borough });
      }
      return res.status(404).send('Borough with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}



module.exports = {
  getAllBoroughs,
  getBoroughById,
}