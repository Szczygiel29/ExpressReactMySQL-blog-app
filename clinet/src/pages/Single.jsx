import React from 'react'
import Edit from '../imge/edit.png'
import Delete from "../imge/delete.png"
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
          <div className="info">
            <span>Jakub</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=""/>
            </Link>
            <Link>
              <img src={Delete} alt=""/>
            </Link>
          </div>
        </div>
      </div>
      <Menu/>
    </div>
  )
}

export default Single