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


import BoroughCard from '../components/BoroughCard'

const Home = (props) => {
  
  return (
    <div>
      <h1>NYC Monkeypox Vaccination Sites</h1>
      <BoroughCard boroughs={props.boroughs} />
    </div>
  )
}

export default Home
