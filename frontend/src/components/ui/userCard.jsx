import React from 'react'

export default function UserCard({event}) {
  return (



       <div key={event._id} className='p-7 bg-gray-700 mt-8 text-white rounded w-60 h-80 border border-red-500 box-shadow-2xl hover:scale-105'>

    <div>
        <img id='pic' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        className='mt-[-70px] w-24 h-24  mx-auto hover:scale-110 border-8 rounded-full border-gray-700  '
        alt={'user'} />


<svg xmlns="http://www.w3.org/2000/svg"  className='w-8 h-8  mx-auto ml-40 mt-[-40px] hover:scale-110' height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>

   

        <div className='text-center mt-8'>
            <h1 className=' font-semibold text-lg mt-4'>{name}</h1>
            <p className='text-sm mt-2'>{email}</p>
            <p className='text-sm mt-2'>{role}</p>
            <p className='text-sm mt-2'>joind on <span className='font-bold text-red-400'></span></p>
        </div>

        <div className='text-center mt-14 border-t'>

            <button  className='bg-red-500 text-white px-3 py-1 mr-6 mt-4 rounded-xl hover:scale-110 hover:bg-red-600 hover:box-shadow-2xl'>
            <span className="material-symbols-outlined">delete</span>
            </button>

            <button className='bg-blue-500 text-white px-3 py-1 mt-4 rounded-xl hover:scale-110 hover:bg-blue-600 hover:box-shadow-2xl'>
            <span className="material-symbols-outlined">edit</span>
            </button>
        </div>

    </div>

</div>
  )
}
