import React, { useContext, useEffect, useState, useRef } from 'react';
import { EventContext } from '../../hooks/eventsContext';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { getEventById } = useContext(EventContext);
  const pageRef = useRef(); 


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

  const generatePDF = () => {
    const element = pageRef.current;
    const options = {
      margin: 0.1,
      filename: `${event.title.replace(/\s+/g, '_')}_Event.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row" ref={pageRef}>

        <div className="w-full md:w-3/5 bg-gray-700 rounded-l-2xl p-6 space-y-8 overflow-auto">
          <div className="relative">
            <img
              className="w-full h-72 object-cover rounded-xl shadow-md"
              src={event.image}
              alt="Event"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-200 mb-4">{event.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{event.description}</p>
            <div className="text-sm text-gray-300">
              <span className="font-semibold text-gray-400">Date:</span> {event.date} | 
              <span className="ml-6 font-semibold text-gray-400">Location:</span> {event.location}
            </div>
          </div>

          <div className="bg-gray-600 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">About the Event</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {event.description}
            </p>
          </div>
        </div>


        <div className="w-full md:w-2/5 bg-gray-800 text-white p-6 space-y-6 shadow-xl">
          <div>
            <h2 className="text-3xl font-bold">Participants</h2>
            <p className="text-sm opacity-70">Manage attendees for this event</p>
          </div>

          <div className="flex flex-col space-y-6">
            {event.participants.map((user) => (
              <div
                key={user.id}
                className="bg-gray-700 rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                    {user.userName[0]}
                  </div>
                  <div className="max-w-xs">
                    <p className="text-lg font-semibold text-gray-200 truncate">
                      {user.userName}
                    </p>
                    <p className='text-sm text-gray-300 '>{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={generatePDF}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}
