import React, { createContext, useEffect, useState } from 'react'
import apiClient from '../services/axios.client';




export const AuthContext = createContext();




export  const AuthProvider = ({children}) => {


    const [user , setuser] = useState(null);

    const [users , setUsers] = useState([]);

    const [token , setToken] = useState(null);

    const [isAuth , setIsAuth] = useState(false);


    const register = async ( Name , email , password) => {

        try{
    
            const userData = { userName: Name  , email: email , password: password  }
    
            const res = await apiClient.post('users/register', userData );

            setuser(res.data)
    
            return res.data
    
        }catch(err){
    
            console.log('error while register', err);
            throw err
            
        };
    };




    const getUserById = async ( userId) => {

        try{
    
            const userData = { userName: Name  , email: email , password: password  }
    
            const res = await apiClient.post(`users/getUserById/${userId}`);

            setuser(res.data)
    
            return res.data
    
        }catch(err){
    
            console.log('error while fetching user', err);
            throw err
            
        };
    };

    
    useEffect(()=>{


        const token =  localStorage.getItem('token');
        const userId = localStorage.getItem('userId')

        if(token){

            setIsAuth(true);
            setToken(token);

        }
         getUserById(userId);

    },[])


    
    const login = async (email , password) => {


        try{

            const res = await apiClient.post('users/login', {email , password});
            const { user , token} = res.data

            setuser(user);
            setToken(token);
            setIsAuth(true)

            localStorage.setItem('token',token);
            localStorage.setItem('role', user.role);
            localStorage.setItem('userId',user._id)

            return user

        }catch(err){

            console.log('error during login', err);
            throw err
        }

    }


    const logout = () =>{

        setuser(null);
        setToken(null);
        setIsAuth(false)
        localStorage.removeItem('token');
        localStorage.removeItem('role')

    }


    const getAllUsers = async () => {


        try{

            const res = await apiClient.get('/users/getAllUsers');
            
            return res.data

        }catch(err){

            console.log('error during fetching users', err);
            throw err
        }

    }

    const deleteUser = async (userId) => {


        try{

            const res = await apiClient.delete(`/users/deleteUser/${userId}`);
            
            return res.data

        }catch(err){

            console.log('error during deleting users', err);
            throw err
        }

    }


  return (

    <AuthContext.Provider value={{user ,users , token , isAuth , register , login , logout , getAllUsers , deleteUser}}>
        {children}
    </AuthContext.Provider>
  )
}
