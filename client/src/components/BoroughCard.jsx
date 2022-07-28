import { useNavigate } from 'react-router-dom'

const BoroughCard = (props) => {
  let navigate = useNavigate()

  const showBorough = (id) => {
    navigate(`borough/${id}`)
  }

  return (
        <div onClick={() => showBorough(props.borough._id)}>
          <div className="borough">
            <h2>{props.borough.name}</h2>
          </div>
        </div>
  )
}

export default BoroughCard