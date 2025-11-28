import { useContext, useEffect, useState } from 'react';
import CreateEvent from './createEvent';
import { EventContext } from '../../hooks/eventsContext';
import UpdateEvent from './updateEvent';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AddParticipent from './addParticipent';

export default function ManageEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { events, getEvents, deleteEvent } = useContext(EventContext);
  const [filterdEvents, setFilterdEvents] = useState(events);

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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await deleteEvent(id);
      getEvents();
      toast.success('Event deleted successfully');
    }
  };

  const sortevents = () => {
    setFilterdEvents((ov) => {
      ov.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      return [...ov];
    });
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term === '') {
      setFilterdEvents(events);
    } else {
      setFilterdEvents(events.filter(event =>
        event.title.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
      ));
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    setFilterdEvents(events);
  }, [events]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 relative overflow-hidden">

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 p-6 md:p-10">

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Events</span>
                </h1>
                <p className="text-gray-400 text-lg">Create, edit, and manage all your events</p>
              </div>
              <button
                onClick={toggleModal}
                className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-gray-900 font-black rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:shadow-[0_0_50px_rgba(163,230,53,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                + New Event
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary/50 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              </div>
              <button
                onClick={sortevents}
                className="px-6 py-4 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-white font-bold hover:border-secondary/50 transition-all"
              >
                Sort A-Z
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterdEvents.map((event) => (
              <div
                key={event._id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/5 group-hover:to-primary/5 transition-all duration-500 rounded-3xl"></div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img
                    src={fakeImage || event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-secondary/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-black">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-400">
                      📍 <span className="text-gray-300">{event.location}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      📅 <span className="text-gray-300">{new Date(event.date).toDateString()}</span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-6">{event.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link to={`/event/details/${event._id}`} className="flex-1">
                      <button className="w-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                        👁️ View
                      </button>
                    </Link>
                    <button
                      onClick={() => { setShowUpdate(true); setSelectedEvent(event); }}
                      className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 text-sm font-bold rounded-xl transition-all"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => { setShowAdd(true); setSelectedEvent(event); }}
                      className="px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 text-yellow-400 text-sm font-bold rounded-xl transition-all"
                    >
                      ➕
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 text-sm font-bold rounded-xl transition-all"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filterdEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No events found</p>
            </div>
          )}
        </div>
      </div>

      {isOpen && <CreateEvent toggleModal={toggleModal} />}
      {showUpdate && <UpdateEvent event={selectedEvent} toggleModal={toggleUpdate} />}
      {showAdd && <AddParticipent event={selectedEvent} toggleModal={toggleAdd} />}
    </>
  );
}
