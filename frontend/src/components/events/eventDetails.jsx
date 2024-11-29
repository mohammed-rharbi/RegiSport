import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../hooks/eventsContext';
import { useParams } from 'react-router-dom';

export default function EventDetails() {


    const {id} = useParams();
    const [event , setEvent] = useState(null);
    const {getEventById } = useContext(EventContext)



    const getEvent = async ()=>{

        
            const res = await getEventById(id)

            setEvent(res)
            console.log(res);
            
    }

    useEffect(()=>{


        getEvent();

    }, [id])
    

    if(!event){

        return <p>no events found</p>
    }


  return (


    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row ">

      <div className="w-full md:w-3/4 bg-white p-10 space-y-8 overflow-auto ">

        <div className="relative">
          <img
            className="w-full h-72 object-cover rounded-xl shadow-md"
            src={event.image}
            alt="Event"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{event.description}</p>
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">Date:</span> {event.date} | 
            <span className="ml-6 font-semibold text-gray-900">Location:</span> {event.location}
          </div>
        </div>


        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Event</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {event.description}
          </p>
        </div>

      </div>


      <div className="w-full md:w-1/4 bg-gray-800 text-white p-8 space-y-8 shadow-xl ">
        <div>
          <h2 className="text-3xl font-bold">Participants</h2>
          <p className="text-sm opacity-70">Manage attendees for this event</p>
        </div>

        <div className="flex flex-col space-y-6">

{ event.participants.map((user)=> ( 


<div className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
<div className="flex items-center space-x-4">
 <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {user.userName[0]}
              </div>
                <div>
    <p className="text-lg font-semibold text-gray-200">{user.userName}</p>
  </div>
</div>
<div className="flex space-x-3">
  <button className="bg-red-600 py-1 px-3 rounded-md text-white text-sm hover:bg-red-700 transition-all">Remove</button>
</div>
</div>



)) }

        

        </div>
      </div>
    </div>
  );
}
