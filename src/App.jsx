import React from 'react'
import Navbar from './components/layout/Navbar'
import PracticeSchedule from './components/PracticeSchedule'

const App = () => {

  return (
    <>

    <div className='container-fluid mx-1 mt-3'>
      <div className='row px-3'>
        <div className='col-lg-4 col-sm-12'>
          <h5>Practice Schedule</h5>

          <PracticeSchedule />
        </div>

        <div className="col-lg-8 col-sm-12 mt-3">
          
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App