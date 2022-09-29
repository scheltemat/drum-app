import React from 'react'
import Navbar from './components/layout/Navbar'
import PracticeSchedule from './components/PracticeSchedule'

const App = () => {

  return (
    <>

    <div className='container mx-1 mt-3'>
      <div className='row'>
        <div className='col-4'>
          <h5>Practice Schedule</h5>

          <PracticeSchedule />
        </div>

        <div className="col-8">
          <h2>Home</h2>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App