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
            <button className="editClinic">Edit</button>
            <button className="updateClinic">Update</button>
            <button className="deleteClinic">Delete</button>

          </div>
        </div>
      ))}
    </div>
  )
}
}

export default ClinicDetails;




// import { useNavigate } from 'react-router-dom'
// const ClinicDetails = ((index,name,location,hours,appt_type)) => {
//     return (
//       <div className="clinic-test">
//         <h2>ehahahaha</h2>
       
//       <div className="detail" key={index}>
//         <div className="detail-header">
//           <h1>{name}</h1>
//         </div>
//         <div className="clinics">
//           <h3>Clinic List</h3>
//             <div className="clinic-test">
//                  <div className="clinic-card">
//                     <div className="border">
//                       <div className="clinic-name">
//                         <p id="clinicTitle">{name}</p>
//                       </div>
//                         <p id="location">{location}</p>
//                         <p id="hours">{hours}</p>
//                         <p id="appt-type">{appt_type}</p>
//                         <button className="readReviewsBTN">Read Reviews</button>
//                     </div>
//                   </div>
//               </div>
//         </div>            
//       </div>
      
//       </div>
//     )
//   }
  


// grab a parameter from the url
    // let {boroughId} = useParams ()
//     let navigate = useNavigate()
// // pass down the borough id
// console.log( props.clinics.filter((borough) => borough.clinic === props.id)

//     let [clinicState, setclinicState] = useState([])
//     useEffect(() => {
//       let filtered = props.clinics.filter((clinic) => clinic.borough = props.id 
//       )
//       console.log("filtered:", filtered)
//     }, []

//     )




// return (
//   <div className="clinic-test">
//         {props.clinics.filter((borough) => borough.clinic === props.id)
      
//         .map((clinic) => (
//           <div className="clinic-card" key={clinic.name}>
//             <div className="border">
//                 <div className="clinic-name">
//                     <p id="clinicTitle">{clinic.name}</p>
//                 </div>
//                     <p id="location">{clinic.location}</p>
//                     <p id="hours">{clinic.hours}</p>
//                     <p id="appt-type">{clinic.appt_type}</p>
//                     <button className="readReviewsBTN">Read Reviews</button>
//             </div>
//           </div>
//           )
        

//       )}
//   </div>
// )
// }
// }





