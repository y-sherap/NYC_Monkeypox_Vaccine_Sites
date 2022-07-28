import BoroughCard from '../components/BoroughCard'

const Home = (props) => {
  
  return (
    <div className="borough-list">
      <h1>NYC Monkeypox Vaccination Sites</h1>
      {props.boroughs.map((borough) => (
          <BoroughCard borough={borough} key={borough._id}/>
      ))}
    </div>
  )
}

export default Home




