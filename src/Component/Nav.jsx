import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import index from '../index.css';
function Nav() {
  const [active, setactive] = useState(false);
  const navigate = useNavigate();
  const Auth = localStorage.getItem('user');
  const UserName = JSON.parse(localStorage.getItem('user'));
  const handleLogOut = () => {
    localStorage.clear();
    alert("Do you want to Logout");
    navigate("/sighup");
  }
  const openMenu = () => {
    setactive(true);
  }
  const CloseMenu = () => {
    setactive(false);
  }
  return (
    <div className='Nav'>
      <i className="fa-solid fa-bars" onClick={openMenu}></i>
      <img className='img' src='https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171109424/89209165-ecommerce-icon-isolated-on-orange-round-button-abstract-illustration.jpg' alt="Pic" />
      <nav className={active ? "slider active" : "slider"}>
        {Auth ?
          <ul>
            <i className="fa-solid fa-xmark close" onClick={CloseMenu}></i>
            <li><Link to='/homecomp' className='Link'>Home</Link></li>
            <li><Link to='/home' className='Link'>ProductList</Link></li>
            <li><Link to='/Add' className='Link'>Add</Link></li>
            <li><Link to='/logout' className='Link' onClick={handleLogOut}>Logout ({UserName.name})</Link></li>
          </ul>
          :
          <ul>
            <i className="fa-solid fa-xmark close" onClick={CloseMenu}></i>
            <li> <Link to='/sighup' className='Link'>signup</Link></li>
            <li> <Link to='/login' className='Link'>Login</Link></li>
          </ul>

        }
      </nav>
    </div>
  )
}

export default Nav;