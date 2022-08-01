// import { useNavigate, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const EditClinic = (props) => {
//   let { id } = useParams()

//   let navigate = useNavigate()

//   const initialState = {
//     name: '',
//     location: '',
//     hours: '',
//     appt_type: ''
//   }
//   const [clinic, setClinic] = useState({})
//   const [clinicDetails, setClinicDetails] = useState(initialState)

//     useEffect(() => {
//     const getClinic = async () => {
//       const response = await axios.get(`/api/clinic/${props.id}`)
//       console.log(response.data.clinic)
//       setClinic(response.data.clinic)
//     }
//     getClinic()
//   }, [props.id])

//   const handleChange = (e) => {
//     setClinicDetails({ ...clinicDetails, [e.target.id]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     let res = await axios.put(
//       `/clinics/${id}`, clinicDetails
//     )
//     setClinicDetails(initialState)
//     navigate('/borough/:id')
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           id="name"
//           value={clinicDetails.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="location"
//           value={clinicDetails.location}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="hours"
//           value={clinicDetails.hours}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           id="appt_type"
//           value={clinicDetails.appt_type}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default EditClinic
____
// original code


// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const EditClinic = (props) => {
//   let navigate = useNavigate()
//   const [clinic, setClinic] = useState({})

//   // need axios api request to find clinic
//   useEffect(() => {
//     const getClinic = async () => {
//       const response = await axios.get(`/api/clinic/${props.id}`)
//       console.log(response.data.clinic)
//       setClinic(response.data.clinic)
//     }
//     getClinic()
//   }, [props.id])

//   const { name, location, hours, appt_type, _id } = clinic
//   // only render clinic if data is there

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await axios.put(`clinics/:id`)
//     // addClinic(e)
//     navigate('/borough/:id/:id')
//     console.log(props.clinics)
//   }

//   return _id && (
//     <div>
//          <form onSubmit={handleSubmit}>

//       <div className="name">
//         <input
//           type="text"
//           defaultValue={name}

//           name={'name'}
//           placeholder={'Clinic Name'}
//         />
//         <input
//           type="text"
//           defaultValue={location}

//           name={'location'}
//           placeholder={'Address'}
//         />
//         <input
//           type="text"
//           defaultValue={hours}

//           name={'hours'}
//           placeholder={'Hours of Operation'}
//         />
//           <input
//           type="text"
//           defaultValue={appt_type}

//           name={'appt_type'}
//           placeholder={'Appointment Type'}
//         />

//         <button id="form-submit">Submit</button>
//       </div>
// </form>
//     </div>

//   )
// }

// export default EditClinic