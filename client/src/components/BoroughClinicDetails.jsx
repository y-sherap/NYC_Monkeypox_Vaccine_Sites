/* eslint-disable */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClinicDetails from './ClinicDetails'
import FormCard from './FormCard'
import axios from 'axios'


const BoroughClinicDetails = (props) => {
  const [borough, setBorough] = useState('')
  const [clinics, setClinics] = useState([])

  let { id } = useParams()

  useEffect(() => {
    let selectedBorough = props.boroughs.find((borough) => borough._id === id)
    setBorough(selectedBorough)
  }, [props.boroughs, id])

  const getClinics = async () => {
    const response = await axios.get(`/api/clinics/${id}`)
    console.log(response.data.clinics)
    setClinics(response.data.clinics)
    // narrowing down the data that i need to access from my database
  }
  useEffect(() => {
    getClinics()
  }, [])

  return borough ? (
   
    <div className="detail">
      <div className="detail-header">
        <h1>{borough.name}</h1>{' '}
      </div>
      <div className="clinics">
        <div className="clinicform">
          <FormCard id={id} clinics={clinics} reloadClinicsPage={getClinics}/>
        </div>
        <div className="clinic-list">
          {/* BRING IN CLINIC */}
          {/* {props.clinics.map((clinic) => ( */}
          <ClinicDetails clinics={clinics} id={id} reloadClinicsPage={getClinics}/>
        </div>
          
      </div>
          
    </div>
    ) : null
  
}

export default BoroughClinicDetails