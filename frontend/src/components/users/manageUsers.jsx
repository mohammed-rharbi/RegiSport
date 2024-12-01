import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../hooks/authContext';
import { toast } from 'react-toastify';

export default function ManageUsers() {
 
 
    const [users , setUsers] = useState([])
    const {getAllUsers , deleteUser} = useContext(AuthContext);


useEffect(()=>{


    const getIt = async ()=>{


        const AllUsers = await getAllUsers();

        setUsers(AllUsers);

    }

    getIt()

},[])


const handleDelete = async (id)=>{


  
  if(window.confirm('are you sure you want to delete this user ')){

  await deleteUser(id);
  getIt();
  toast.success('user Deleted successfully');

}

}


    if(!users){

        return <p>no users found</p>
    }

    

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen ">

    
        <header className="p-6 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold">Manage Users Dashboard</h1>
            <p className="text-gray-200">Streamline your event management effortlessly.</p>
          </div>
          <button
            
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded shadow-md"
          >
            + New User
          </button>
        </header>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-start justify-between"
          >

            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {user.userName[0]}
              </div>

              <div className="ml-3">
                <h2 className="text-lg font-semibold text-gray-100">{user.userName}</h2>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="text-sm font-medium text-gray-300">
                Role: <span className="capitalize text-gray-100">{user.role}</span>
              </span>
              <div className="flex gap-2">
                <button className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition">
                  Edit
                </button>
                <button onClick={()=> handleDelete(user._id)} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
