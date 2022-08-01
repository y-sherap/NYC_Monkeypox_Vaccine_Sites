import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const EditClinic = (props) => {
  let { id } = useParams()

  let navigate = useNavigate()

  const initialState = {
    name: '',
    location: '',
    hours: '',
    appt_type: ''
  }

  const [clinicDetails, setClinicDetails] = useState(initialState)

    useEffect(() => {
    const getClinic = async () => {
      const response = await axios.get(`/api/clinic/${props.id}`)
      console.log(response.data.clinic)
      setClinic(response.data.clinic)
    }
    getClinic()
  }, [props.id])

  const handleChange = (e) => {
    setClinicDetails({ ...clinicDetails, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.put(
      `/clinics/${id}`, clinicDetails
    )
    setClinicDetails(initialState)
    navigate('/borough/:id')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={clinicDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          id="location"
          value={clinicDetails.location}
          onChange={handleChange}
        />
        <input
          type="text"
          id="hours"
          value={clinicDetails.hours}
          onChange={handleChange}
        />
        <input
          type="text"
          id="appt_type"
          value={clinicDetails.appt_type}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditClinic