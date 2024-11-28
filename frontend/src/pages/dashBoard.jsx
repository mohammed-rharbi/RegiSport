import React from 'react'
import DashCard from '../components/ui/dashCard'

export default function DashBoard() {
  return (


    <div className="flex h-screen">

      <div className="flex-1 rounded-lg bg-gray-800 p-6">


<div className='flex justify-center gap-4 mb-6'>
<DashCard/>
<DashCard/>
<DashCard/>
</div>


        <div>

          <h2 className="text-xl font-semibold mb-4">Manager Dashboard</h2>
          <p>This is where you can manage movies, reservations, users, and more.</p>

          <div className="mt-6">
            <h3 className="text-lg font-medium">Overview</h3>
            <p>Here you can see an overview of recent activity, analytics, and stats.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
