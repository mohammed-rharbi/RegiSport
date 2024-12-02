import React, { useState , useContext , useEffect } from 'react';
import { EventContext } from '../hooks/eventsContext';
import { useParams } from 'react-router-dom';


export default function EventPage() {


  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { getEventById } = useContext(EventContext);


  const getEvent = async () => {
    const res = await getEventById(id);
    setEvent(res);
  };

  useEffect(() => {
    getEvent();
  }, [id]);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={'/public/fake.jpg'}
            alt="Event"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded-lg">
            <h1 className="text-3xl font-semibold">{event.title}</h1>
          </div>
        </div>

        <div className="p-6">
          <p className="text-xl text-gray-800 font-medium">{new Date(event.date).toDateString }</p>
          <p className="text-lg text-gray-600 mt-2">{event.location}</p>

          <div className="mt-4">
            <h2 className="text-2xl text-gray-800 font-semibold">About the Event</h2>
            <p className="text-lg text-gray-600 mt-2">{event.description}</p>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="text-lg text-gray-800 font-medium">Share:</p>
              <button className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook"></i> Facebook
              </button>
              <button className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
