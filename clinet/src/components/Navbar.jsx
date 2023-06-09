import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imge/logo.png';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" className='logo' />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/?cart=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cart=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cart=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cart=sport">
            <h6>SPORT</h6>
          </Link>
          <Link className='link' to="/?cart=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to="/?cart=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ?
            (<span onClick={logout}>Logout</span>
            ) : (
              <Link className='link' to="/login">Login</Link>
            )}
          <span className='write'>
            <Link className="link" to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar