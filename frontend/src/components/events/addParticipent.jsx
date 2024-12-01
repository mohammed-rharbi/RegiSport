import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { EventContext } from '../../hooks/eventsContext';
import { AuthContext } from '../../hooks/authContext';
import Search from '../ui/search';

export default function AddParticipent({ event, toggleModal }) {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const { getAllUsers } = useContext(AuthContext);
    const { addUserToEvent } = useContext(EventContext);



    const handleUserSelection = (userId) => {
        setSelectedUsers((prevSelectedUsers) =>
            prevSelectedUsers.includes(userId)
                ? prevSelectedUsers.filter((id) => id !== userId)
                : [...prevSelectedUsers, userId]
        );
    };

      
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await getAllUsers();
                setUsers(res);
                setFilteredUsers(res)
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to fetch users. Please try again later.');
            }
        };
        fetchUsers();
    }, [getAllUsers]);



    const handleSearch = async (query) => {

        const lowerQuery = query.toLowerCase();

        setFilteredUsers( users.filter((user)=> user.userName.toLowerCase().includes(lowerQuery) || user.email.includes(lowerQuery)));

    }


    const addParticipent = async (e) => {
        e.preventDefault();

        if (selectedUsers.length === 0) {
            setError('Please select at least one user to add to the event.');
            return;
        }

        setError('')
        setLoading(true)

        try {
            await addUserToEvent(event._id, selectedUsers);
            toast.success('Users added successfully');
            setSelectedUsers([]);
            toggleModal();
        } catch (err) {
            setError('There was an error while updating the event. Please try again.');
            console.error('Error during event update:', err);
        } finally{
            setLoading(false);
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
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add Participant</h3>
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

                    <Search handleSearch={handleSearch}/>

                    <form onSubmit={addParticipent} encType="multipart/form-data" className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-1">
                            <div>
                                <h4 className="font-semibold text-gray-700">Select Users</h4>
                                <div className="space-y-2 mt-2">
                                    {filteredUsers.map((user) => (
                                        <div key={user._id} className="flex items-center space-x-2">
                                            <div className="p-2 h-10 w-10 bg-blue-500 text-white text-center rounded-full">
                                                {user.userName[0]}
                                            </div>
                                            <label htmlFor={`user-${user._id}`} className="text-gray-300">
                                                {user.email}
                                            </label>
                                            <input
                                                type="checkbox"
                                                id={`user-${user._id}`}
                                                checked={selectedUsers.includes(user._id)}
                                                onChange={() => handleUserSelection(user._id)}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                            />
                                        </div>
                                    ))}
                                </div>
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
                                   {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
