import React, { createContext, useState } from 'react'
import apiClient from '../services/axios.client';




export const EventContext = createContext();


export  const EventProvider = ({children}) => {


    const [events , setEvents] = useState([]);


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


    const updateEvent = async ( id ,{title , image , date , description , location}) => {

        try{
    
    const formData = new FormData();
         formData.append('title', title);
         formData.append('image', image);  
         formData.append('date', date);
         formData.append('description', description);
         formData.append('location', location);
    
    const res = await apiClient.patch(`events/update/event/${id}`, formData , {

                headers: {'Content-Type': 'multipart/form-data',},
            });
            
            return res.data
    
        }catch(err){
    
            console.log('error while updating event', err);
            throw err
            
        };
    };


    const getEventById = async (id)=>{

        try {


            const res = await apiClient.get(`/events/getEvent/${id}`)


            return res.data

            
        } catch (error) {

            console.log('error during fetching the event', error);
            return null;
            
            
        }

    }

    const deleteEvent = async (id)=>{

        try {


            const res = await apiClient.delete(`events/delete/event/${id}`)

            return res.data

            
        } catch (error) {

            console.log('error during deleting the event', error);
            
            
        }

    }

    const addUserToEvent = async (eventId , users)=>{


        try {

            const res = await apiClient.patch(`events/${eventId}/addParticipent` , {userIds: users});

            return res.data

        } catch (error) {

            console.log('error during updating the event', error);
            
        }

    }

    
    const getUserEvents = async (userId)=>{


        try {

            const res = await apiClient.get(`events/${userId}/userEvents`);

            return res.data

        } catch (error) {

            console.log('error during updating the event', error);
            
        }

    }



  return (

    <EventContext.Provider value={{events , createEvent , getEvents , updateEvent , getEventById , deleteEvent , addUserToEvent , getUserEvents }}>
        {children}
    </EventContext.Provider>
  )
}
