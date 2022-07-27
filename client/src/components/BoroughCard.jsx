import { useNavigate } from 'react-router-dom'

const BoroughCard = (props) => {
  let navigate = useNavigate()

  const showBorough = (boroughs) => {
    navigate(`${boroughs._id}`)
  }

  return (
    <div className="borough-list">
      {props.boroughs?.map((boroughs) => (
        <div key={boroughs.name} onClick={() => showBorough(boroughs)}>
          <div className="borough">
            <h2>{boroughs.name}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BoroughCard