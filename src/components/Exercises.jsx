import React from 'react'
import Button from 'react-bootstrap/Button';
import PracticeSchedule from './PracticeSchedule'
import beatData from '../assets/beatData'
import fillData from '../assets/fillData'

const Exercises = () => {

  return (
    <>
    <div className='container mx-1 mt-3'>
      <div className='row'>
        <div className='col-4'>
          <h5>Practice Schedule</h5>

          <PracticeSchedule />
        </div>

        <div className="col-8 mt-0">

          <div>

            <div className='row mt-3'>
              <h3>Drum Beats</h3>
            </div>

            {beatData.map(beat =>{

              return ( 
              <div className='row my-4'>
                <div>
                  <h5>{beat.title}</h5>
                  <p>Difficulty: {beat.difficulty}</p>
                </div>
                <div className='mb-1'>
                  <iframe key={beat.id} src={`https://flat.io/embed/${beat.embedSrc}?_l=true&sharingKey=34ed5ad07b12e688737a9fc3d87d4d20030ea7eae59e55234b069a2831a6a9ab98f8a0be451db47223a5bc648f54b67e9e1317dc1fbeda3d6bcd633e94e5aeea`} height="300" width="800" frameBorder="0" allowfullscreen></iframe>
                </div>
                <Button variant="warning">Add to Practice Schedule</Button>
              </div>

              )

            })}

          </div>

          <div className='row mt-5'>
            <h3>Drum Fills</h3>
          </div>
          {fillData.map(fill =>{

            return ( 

              <div className='row my-3'>
                <div>
                  <h5>{fill.title}</h5>
                  <p>Difficulty: {fill.difficulty}</p>
                </div>
                <div>

                  <iframe key={fill.id} src={`https://flat.io/embed/${fill.embedSrc}?_l=true&sharingKey=34ed5ad07b12e688737a9fc3d87d4d20030ea7eae59e55234b069a2831a6a9ab98f8a0be451db47223a5bc648f54b67e9e1317dc1fbeda3d6bcd633e94e5aeea`} height="300" width="800" frameBorder="0" allowfullscreen></iframe>
                </div>
                <Button variant="warning">Add to Practice Schedule</Button>
              </div>

            )

            })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Exercises