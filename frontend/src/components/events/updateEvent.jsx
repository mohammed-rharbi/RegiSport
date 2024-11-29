import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { EventContext } from '../../hooks/eventsContext';

export default function UpdateEvent({ event, toggleModal }) {

    const [title, setTitle] = useState(event?.title || '');
    const [description, setDescription] = useState(event?.description || '');
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(event?.date ? new Date(event.date).toISOString().split('T')[0] : '');
    const [location, setLocation] = useState(event?.location || '');
    const [error, setError] = useState('');

    const { updateEvent, getEvents } = useContext(EventContext);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const eventData = { title, image, date, description, location };
            await updateEvent(event._id, eventData);

            toast.success('Event updated successfully');
            toggleModal();
            getEvents();
        } catch (err) {
            setError('There was an error while updating the event, please try again');
            console.error('Error during event update:', err);
        }
    };

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 z-30 flex justify-center items-center w-full h-full max-h-full-1"
        >
            <div onClick={toggleModal} className="absolute top-0 left-0 bg-black bg-opacity-70 h-full w-full z-40"></div>

            <div className="relative flex p-4 z-50 p-4 max-w-md max-h-full">
                <div className="w-full bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update Event</h3>
                        <button
                            onClick={toggleModal}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form onSubmit={handleUpdate} encType="multipart/form-data" className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Event Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Location"
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Event Description
                                </label>
                                <textarea
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Event Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                {event?.image && !image && (
                                    <div className="mt-2">
                                        <img
                                            src={event.image}
                                            alt="Current Event"
                                            className="max-w-full h-auto rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>

                            {error && <div className="text-red-500 text-sm">{error}</div>}
                        </div>

                        <div className="flex justify-end mt-4 space-x-4">
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="text-gray-500 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
