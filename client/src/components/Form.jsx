import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [hours, setHours] = useState('')
  const [appt_type, setAppt_type] = useState('')


  const addClinic = async (e) => {
    await axios.post('http://localhost:3001/reviews/' + props.id, {
      name: name,
      location: location,
      hours: hours,
      appt_type: appt_type
    })

    setName('')
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
  const changeAppt_Type = (event) => {
    let n = event.target.value
    setAppt_type(n)
  }


  const handleSubmit = (e) => {
    addClinic(e)
    console.lot(props.clinics)
  }

  return (
    <div className="form">
      <h1>Add A Clinic</h1>

      <div className="input-div">
        <form onSubmit={handleSubmit}>

          <div className="name">
            <input
              type="text"
              value={name}
              onChange={changeName}
              name={'name'}
              placeholder={'name'}
            />
            <input
              type="text"
              value={location}
              onChange={changeLocation}
              name={'location'}
              placeholder={'address'}
            />
            <input
              type="text"
              value={hours}
              onChange={changeHours}
              name={'hours'}
              placeholder={'hours of operation'}
            />
          <input
            type="text"
            value={appt_type}
            onChange={changeAppt_Type}
            name={'text'}
            placeholder={'appointment type'}
            className="apptType"
          />
            <button id="form-submit">Submit</button>
          </div>
          </form>
          </div>
        </div>
  )
}

export default Form
