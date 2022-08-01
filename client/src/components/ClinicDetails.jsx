import axios from 'axios'
// import { Link } from "react-router-dom"; 


const ClinicDetails = (props) => {
  let arr = []
  for (let i = 0; i < props.clinics.length; i++) {
    if (props.id === props.clinics[i].borough) {
      arr.push(props.clinics[i])
    }

    const deleteClinic = async (id) => {
    await axios.delete(`http://localhost:3001/api/clinics/${id}`)
    props.reloadClinicsPage()
    }

  return (
    <div className="clinic-test">
          {props.clinics.map((clinic) => (

        <div className="clinic-card" key={clinic.name}>
          <div className="border">
            <div className="clinic-name">
              <p id="clinicTitle">{clinic.name}</p>
            </div>
            <div className="clinicValues">
              <p id="location">{clinic.location}</p>
              <p id="hours">{clinic.hours}</p>
              <p id="appt-type">{clinic.appt_type}</p>
            </div>
            <div className="editAndDeleteIcons">
              {/* <Link to={`borough/:id/:id`}>  
                <img src="https://static.thenounproject.com/png/1044006-200.png" 
                alt="edit"/>     
              </Link> */}
              <img src="https://static.thenounproject.com/png/1415718-200.png" 
                alt="trashicon"
                className="deleteClinic"
                onClick={() => deleteClinic(clinic._id)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
}

export default ClinicDetails