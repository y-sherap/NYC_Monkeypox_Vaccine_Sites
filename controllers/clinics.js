const { Clinic } = require('../models')

const getAllClinics = async (req, res) => {
  try {
      const clinics = await Clinic.find()
      return res.status(200).json({ clinics })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


const createClinic = async (req, res) => {
  try {
      const clinic = await new Clinic(req.body)
      await clinic.save()
      return res.status(201).json({
          clinic,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}


const deleteClinic = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Clinic.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Clinic deleted");
      }
      throw new Error("Clinic not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateClinic = async (req, res) => {
  try {
      const clinic = await Clinic.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(clinic)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}




// const getClinicById = async (req, res) => {
//   try {
//       const { id } = req.params;
//       const clinic = await Clinic.findById(id)
//       if (clinic) {
//           return res.status(200).json({ clinic });
//       }
//       return res.status(404).send('Borough with the specified ID does not exists');
//   } catch (error) {
//       return res.status(500).send(error.message);
//   }
// }

// const getClinicByBoroughId = async (req, res) => {
//   try {
//       const (id) = req.params;
//       const clinic = await Clinic.find(borough {'${id}'})
//       if (clinic) {
//           return res.status(200).json({ clinic });
//       }
//       return res.status(404).send('Borough with the specified ID does not exists');
//   } catch (error) {
//       return res.status(500).send(error.message);
//   }
// }


module.exports = {
  getAllClinics,
  createClinic,
  updateClinic,
  deleteClinic,
}