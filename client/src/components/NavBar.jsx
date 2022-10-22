
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar">
      <h2>Welcome back, Yangtsel!</h2> 
      <div>
        <div className="navHome">
          <Link to="/">HOME</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar