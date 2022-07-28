const ClinicDetails = (props) => {
  let arr = []
  for (let i = 0; i < props.clinics.length; i++) {
    if (props.id === props.clinics[i].borough) {
      arr.push(props.clinics[i])
    }

  return (
    <div className="clinic-test">
          {props.clinics.map((clinic) => (


      // {arr.map((clinic) => (
        <div className="clinic-card" key={clinic.name}>
          <div className="border">
            <div className="clinic-name">
              <p id="clinicTitle">{clinic.name}</p>
            </div>
            <p id="location">{clinic.location}</p>
            <p id="hours">{clinic.hours}</p>
            <p id="appt-type">{clinic.appt_type}</p>
            <button className="readReviewsBTN">Read Reviews</button>

          </div>
        </div>
      ))}
    </div>
  )
}
}

export default ClinicDetails