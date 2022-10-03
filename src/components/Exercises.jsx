import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import PracticeSchedule from './PracticeSchedule'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import beatData from '../assets/beatData'
import fillData from '../assets/fillData'
import { loadBeats, loadFills, addToPractice } from '../actions/actions';

const Exercises = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBeats(beatData))
    dispatch(loadFills(fillData))
  }, [])
  

  const handleClick = (id) => {
    
    // console.log(id)
    navigate(`/exercises/${id}`)
  }
  

  return (
    <>
    <div className='container-fluid mx-1 mt-3'>
    
      <div className='row px-3' id='header-container'>
        <div className='col-lg-4' id='header'>
          <h5>Practice Schedule</h5>

          <PracticeSchedule />
        </div>

        <div className="col-lg-8 col-sm-12 mt-0">

          <div>

            <div className='row mt-3 '>
              <h3>Drum Beats</h3>
            </div>

            {beatData.map(beat =>{

              return ( 

              <div className='row my-4' key={beat.id}>
                <div onClick={()=>handleClick(beat.id)}>
                  <div>
                    <h5>{beat.title}</h5>
                    <p>Difficulty: {beat.difficulty}</p>
                  </div>

                  <div className='mb-1'>
                    <iframe key={beat.id} src={`https://flat.io/embed/${beat.embedSrc}?zoom=-6`} height="300" width="100%" frameBorder="0" allowFullScreen allow="midi"></iframe>
                  </div>
                </div>

                <Button onClick={()=>dispatch(addToPractice(beat))} variant="warning">Add to Practice Schedule</Button>
              </div>

              )

            })}

          </div>

          <div className='row mt-5'>
            <h3>Drum Fills</h3>
          </div>
          {fillData.map(fill =>{

            return ( 

              <div className='row my-3' key={fill.id} >
                <div onClick={()=>handleClick(fill.id)} >
                  <div>
                    <h5>{fill.title}</h5>
                    <p>Difficulty: {fill.difficulty}</p>
                  </div>

                  <div>
                    <iframe key={fill.id} src={`https://flat.io/embed/${fill.embedSrc}??zoom=-6`} height="300" width="100%" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>

                <Button onClick={()=>dispatch(addToPractice(fill))}  variant="warning">Add to Practice Schedule</Button>
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