import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClinicDetails from './ClinicDetails'
import Form from './Form'


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
        <div className="clinicform">
          <Form id={id} clinics={props.clinics} />
        </div>
        


        <div className="clinic-list">
          {/* BRING IN CLINIC */}
          {/* {props.clinics.map((clinic) => ( */}
          <ClinicDetails clinics={props.clinics} id={id} />
        </div>
          
      </div>
          
    </div>
    ) : null
  
}



export default BoroughClinicDetails












// import { useEffect, useState, Suspense } from 'react'
// import { useParams } from 'react-router-dom'


// const BoroughClinicDetails = (props) => {


// // import { useNavigate } from 'react-router-dom'
// const ClinicDetails = (index,name,location,hours,appttype) => {
//   return (
//     <div className="clinic-test">
//       <h2>ehahahaha</h2>
     
//     <div className="detail" key={index}>
//       <div className="detail-header">
//         <h1>{name}</h1>
//       </div>
//       <div className="clinics">
//         <h3>Clinic List</h3>
//           <div className="clinic-test">
//                <div className="clinic-card">
//                   <div className="border">
//                     <div className="clinic-name">
//                       <p id="clinicTitle">{name}</p>
//                     </div>
//                       <p id="location">{location}</p>
//                       <p id="hours">{hours}</p>
//                       <p id="appt-type">{appttype}</p>
//                       <button className="readReviewsBTN">Read Reviews</button>
//                   </div>
//                 </div>
//             </div>
//       </div>            
//     </div>
    
//     </div>
//   )
// }

//     const {boroughs , clinics } = props;
//     const [list, setList] = useState();
//     //console.log('clinics',clinics);

//   let { id } = useParams()

  

//   useEffect(() => {
//     let getCliniclist = [];
//     let getClinicName = '';
//     let selectedClinicName = boroughs.find((borough) => borough._id === id);
//     if(selectedClinicName){
//        if(selectedClinicName.name==='Bronx'){
//         getClinicName = 'Bronx';
//                     clinics.map((clinics) => {
//                       if(clinics.borough === id){
//                         getCliniclist.push({
//                               'appt_type': clinics.appt_type,
//                               'borough': clinics.borough,
//                               'hours': clinics.hours,
//                               'location': clinics.location,
//                               'name': clinics.name,
//                               'updatedAt': clinics.updatedAt,
//                           });
//                       }
                      
//                     });
//        }else if(selectedClinicName.name==='Brooklyn'){
//                     clinics.map((clinics) => {
//                       if(clinics.borough === id){
//                         getCliniclist.push({
//                             'appt_type': clinics.appt_type,
//                             'borough': clinics.borough,
//                             'hours': clinics.hours,
//                             'location': clinics.location,
//                             'name': clinics.name,
//                             'updatedAt': clinics.updatedAt,
//                         });
//                     }
                    
//                   });

//        }else if(selectedClinicName.name==='Manhattan'){
//         clinics.map((clinics) => {
//           if(clinics.borough === id){
//             getCliniclist.push({
//                 'appt_type': clinics.appt_type,
//                 'borough': clinics.borough,
//                 'hours': clinics.hours,
//                 'location': clinics.location,
//                 'name': clinics.name,
//                 'updatedAt': clinics.updatedAt,
//             });
//         }
        
//       });

//        }else if(selectedClinicName.name==='Queens'){
//         clinics.map((clinics) => {
//           if(clinics.borough === id){
//             getCliniclist.push({
//                 'appt_type': clinics.appt_type,
//                 'borough': clinics.borough,
//                 'hours': clinics.hours,
//                 'location': clinics.location,
//                 'name': clinics.name,
//                 'updatedAt': clinics.updatedAt,
//             });
//         }
        
//       });

//        }else if(selectedClinicName.name==='Staten Island'){
//         clinics.map((clinics) => {
//           if(clinics.borough === id){
//             getCliniclist.push({
//                 'appt_type': clinics.appt_type,
//                 'borough': clinics.borough,
//                 'hours': clinics.hours,
//                 'location': clinics.location,
//                 'name': clinics.name,
//                 'updatedAt': clinics.updatedAt,
//             });
//         }
        
//       });

//        }else{
//         getCliniclist = [];
//       } 
//     }
  
//     console.log('getCliniclName',getClinicName);
//     console.log('getCliniclist',getCliniclist);
//     setList(getCliniclist);
//     //setBorough(selectedBorough)
//   }, [id]);
//   console.log('borough aaa',list);
//   //debugger;
//   return  (
  
//     <>
//     <h1>Hello</h1>
//     {
//                 list && list.map((resp,index)=>{
//                   <ClinicDetails  
//                         index={index}
//                         name ={resp.name}
//                         appt_type ={resp.appt_type}
//                         hours ={resp.hours}
//                         location ={resp.location}
//                         appt_type ={resp.appt_type}
                        
//                   />


//                 })
            
//     }

//     </>
  
  
//     );
  
// }



// export default BoroughClinicDetails
