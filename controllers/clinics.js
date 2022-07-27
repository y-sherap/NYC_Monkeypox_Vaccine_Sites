const { Clinic } = require('../models')

const getAllClinics = async (req, res) => {
  try {
      const clinics = await Clinic.find()
      return res.status(200).json({ clinics })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getClinicById = async (req, res) => {
  try {
      const { id } = req.params;
      const clinic = await Clinic.findById(id)
      if (clinic) {
          return res.status(200).json({ clinic });
      }
      return res.status(404).send('Borough with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


module.exports = {
  getAllClinics,
  getClinicById,
}