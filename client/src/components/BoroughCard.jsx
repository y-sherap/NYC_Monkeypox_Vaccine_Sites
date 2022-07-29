import { useNavigate } from 'react-router-dom'

const BoroughCard = (props) => {
  let navigate = useNavigate()


const showBorough = (id) => {
    navigate(`borough/${id}`)
  }

  return (
        <div onClick={() => showBorough(props.borough._id)} className="borough-test">
          <div className="borough">
          <h2>{props.borough.name}</h2>
          <img src={props.borough.image} alt="Map" />
          </div>
        </div>
  )
}

export default BoroughCard