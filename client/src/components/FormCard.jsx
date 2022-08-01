import React, { useState } from 'react'
import axios from 'axios'

const FormCard = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [hours, setHours] = useState('')
  const [appt_type, setAppt_type] = useState('')

// await suspends execution until returned promise is fulfilled
  const addClinic = async (e) => {
    await axios.post('http://localhost:3001/api/clinics/' + props.id, {
      name: name,
      location: location,
      hours: hours,
      appt_type: appt_type
    })

    setName('')
    props.reloadClinicsPage()
  }

  const changeName = (event) => {
    let n = event.target.value
    setName(n)
  }
  const changeLocation = (event) => {
    let n = event.target.value
    setLocation(n)
  }
  const changeHours = (event) => {
    let n = event.target.value
    setHours(n)
  }
  const changeAppt_type = (event) => {
    let n = event.target.value
    setAppt_type(n)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    addClinic(e)
    console.log(props.clinics)
  }

  return (
    <div className="form">
      <h3 className="addAClinicTitle">Add A Clinic</h3>

      <div className="input-div">
        <form onSubmit={handleSubmit}>

          <div className="name">
            <input
              type="text"
              value={name}
              onChange={changeName}
              name={'name'}
              placeholder={'Clinic Name'}
            />
            <input
              type="text"
              value={location}
              onChange={changeLocation}
              name={'location'}
              placeholder={'Address'}
            />
            <input
              type="text"
              value={hours}
              onChange={changeHours}
              name={'hours'}
              placeholder={'Hours of Operation'}
            />
              <input
              type="text"
              value={appt_type}
              onChange={changeAppt_type}
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
        </div>
  )
}

export default FormCard