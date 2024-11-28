import React, { createContext, useState } from 'react'
import apiClient from '../services/axios.client';




export const EventContext = createContext();




export  const EventProvider = ({children}) => {


    const [events , setEvents] = useState([]);
    const [loading , setLoading] = useState(false);


    const createEvent = async ( title , image , date , description , location) => {

        try{
    
    const formData = new FormData();
         formData.append('title', title);
         formData.append('image', image);  
         formData.append('date', date);
         formData.append('description', description);
         formData.append('location', location);
    
    const res = await apiClient.post('events/create/event', formData , {

                headers: {'Content-Type': 'multipart/form-data',},
            });

            
            return res.data
    
        }catch(err){
    
            console.log('error while creating event', err);
            throw err
            
        };
    };


    const getEvents = async () => {


        try{

            const res = await apiClient.get('events/get/events');

            setEvents(res.data);
           
            return res.data

        }catch(err){

            console.log('error during fetching events', err);
            throw err
        }

    }




  return (

    <EventContext.Provider value={{events , createEvent , getEvents }}>
        {children}
    </EventContext.Provider>
  )
}
