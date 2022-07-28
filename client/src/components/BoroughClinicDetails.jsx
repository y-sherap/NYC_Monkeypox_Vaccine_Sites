import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ClinicDetails from './ClinicDetails'

const BoroughClinicDetails = (props) => {
  const [borough, setBorough] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let selectedBorough = props.boroughs.find((borough) => borough._id === id)
    setBorough(selectedBorough)
  }, [props.boroughs, id])

  return borough ? (
    <div className="detail">
      <div className="detail-header">
        <h1>{borough.name}</h1>{' '}
      </div>
      <div className="clinics">
        <h3>Clinic List</h3>
        <div className="clinic-list">
          {/* BRING IN CLINIC */}
          <ClinicDetails clinics={props.clinics} id={id} />
        </div>
      </div>

      <div className="back">
        <Link to="/">Back</Link>
      </div>
    </div>
  ) : null
}

export default BoroughClinicDetails
