import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditClinic = (props) => {

  const [clinic, setClinic] = useState({})

  // need axios api request to find clinic
  useEffect(() => {
    const getClinic = async () => {
      const response = await axios.get(`http://localhost:3001/api/clinic/${props.id}`)
      console.log(response.data.clinic)
      setClinic(response.data.clinic)
    }
    getClinic()
  }, [props.id])

  const { name, location, hours, appt_type, _id } = clinic
  // only render clinic if data is there
  return _id && (
    <div>
         <form onSubmit={handleSubmit}>

      <div className="name">
        <input
          type="text"
          defaultValue={name}

          name={'name'}
          placeholder={'Clinic Name'}
        />
        <input
          type="text"
          defaultValue={location}

          name={'location'}
          placeholder={'Address'}
        />
        <input
          type="text"
          defaultValue={hours}

          name={'hours'}
          placeholder={'Hours of Operation'}
        />
          <input
          type="text"
          defaultValue={appt_type}

          name={'appt_type'}
          placeholder={'Appointment Type'}
        />

        {/* <select id="appttype">
          <option value="appointmentOnly">Appointment Only</option>
          <option value="walkIn">Walk In</option>
          onChange={}
        </select> */}
        <button id="form-submit">Submit</button>
      </div>
</form>
    </div>

  )
}

export default EditClinic