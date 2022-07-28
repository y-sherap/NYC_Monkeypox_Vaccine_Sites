import BoroughCard from '../components/BoroughCard'

const Home = (props) => {
  
  return (
    <div className="borough-list">
      <h1>NYC Monkeypox Vaccination Sites</h1>
      {props.boroughs?.map((borough) => (
          <BoroughCard borough={borough} key={borough._id}/>
      ))}
    </div>
  )
}

export default Home



// import { useNavigate } from 'react-router-dom'

// const Home = (props) => {
//   let navigate = useNavigate()

//   const showBorough = (boroughs) => {
//     navigate(`${boroughs._id}`)
//   }

//   return (
//     <div className="borough-list">
//     <h1>NYC Monkeypox Vaccination Sites</h1>
//       {props.boroughs?.map((boroughs) => (
//         <div key={boroughs.name} onClick={() => showBorough(boroughs)}>
//           <div className="borough">
//             <h2>{boroughs.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Home


{/* <DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>  */}


