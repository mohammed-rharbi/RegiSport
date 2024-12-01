import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../hooks/authContext';

export default function Guard({roles , children}) {

    const {isAuth} = useContext(AuthContext)
    const role = localStorage.getItem('role');

    if(!isAuth || !roles === role ){

        return <Navigate to={'/login'}/>
    }

  return children ; 

}