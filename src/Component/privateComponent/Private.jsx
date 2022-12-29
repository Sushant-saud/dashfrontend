import React from 'react'
import { outer, Outlet, useNavigate } from 'react-router-dom'
function Private() {
    const navigate=useNavigate();
    const auth = localStorage.getItem('user');
    return auth ? <Outlet/>: navigate('/sighup');
}
export default Private;