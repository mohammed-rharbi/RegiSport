import React, { useContext, useEffect, useState } from 'react';
import CreateEvent from './createEvent';
import { EventContext } from '../../hooks/eventsContext';
import UpdateEvent from './updateEvent';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AddParticipent from './addParticipent';

export default function ManageEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUpdate , setShowUpdate] = useState(false);
  const [showAdd , setShowAdd] = useState(false);

  const [selectedEvent , setSelectedEvent ] = useState(null);

  const { events, getEvents , deleteEvent } = useContext(EventContext);


  const fakeImage = 'https://images.pexels.com/photos/2897462/pexels-photo-2897462.jpeg?auto=compress&cs=tinysrgb&w=600';

  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  const toggleUpdate = () => {
    setShowUpdate(!showUpdate);

  };

  const toggleAdd = () => {
    setShowAdd(!showAdd);

  };

  const handleDelete = async (id)=>{

    if(window.confirm('are you sure you want to delete this event ')){

        await deleteEvent(id)
        getEvents()
        toast.success('event deleted successfully');

    }
   

  }


  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>

      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

        <header className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold">Manage Events Dashboard</h1>
            <p className="text-gray-200">Streamline your event management effortlessly.</p>
          </div>
          <button
            onClick={toggleModal}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded shadow-md"
          >
            + New Event
          </button>
        </header>


        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative">
                    
                  <img
                    src={fakeImage || event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Location: <span className="text-gray-300">{event.location}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Date: <span className="text-gray-300">{new Date(event.date).toDateString()}</span>
                  </p>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">{event.description}</p>
                </div>


                            
            <div className="p-4 bg-gray-700 flex justify-between items-center space-x-4 relative">

              <Link to={`/event/details/${event._id}`} className="relative group">
                <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition duration-200 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m300-300 280-80 80-280-280 80-80 280Zm180-120q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z"/></svg>
                </button>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-12 text-sm bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  View Details
                </span>
              </Link>

              <button 
                onClick={() => { setShowUpdate(true); setSelectedEvent(event); }} 
                className="relative group bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition duration-200 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-12 text-sm bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  Update Event
                </span>
              </button>

              <button  
                onClick={() => { setShowAdd(true); setSelectedEvent(event); }}
                className="relative group bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full shadow-lg transition duration-200 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-12 text-sm bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  Add Participant
                </span>
              </button>

              <button 
                onClick={() => handleDelete(event._id)} 
                className="relative group bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition duration-200 transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-12 text-sm bg-black text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  Delete Event
                </span>
              </button>
            </div>


              </div>
            ))}
          </div>
        </main>
      </div>

      
      {isOpen && <CreateEvent toggleModal={toggleModal} />}
      {showUpdate && <UpdateEvent event={selectedEvent} toggleModal={toggleUpdate} />}
      {showAdd && <AddParticipent event={selectedEvent} toggleModal={toggleAdd} />}
    </>
  );
}
