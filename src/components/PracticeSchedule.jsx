import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePracticeItem } from '../actions/actions'

const PracticeSchedule = () => {

  const practiceSchedule = useSelector(state => state.practiceSchedule)
  const howManyThingsToPractice = useSelector(state => state.howManyThingsToPractice)
  
  const dispatch = useDispatch() 

  return (
    <>
      {
      howManyThingsToPractice === 0
      ?
      <div>Your Schedule is empty</div>
      :
      <div>
        You have <strong>{practiceSchedule.length}</strong> {practiceSchedule.length > 1 ? "items to practice" : "item to practice"} 
        <br />
      </div>
      }
      <div className="row schedule-items mt-4">
        {
          practiceSchedule.map(item =>{
            return (
              <div key={item.id} className="col-12 d-flex flex-column">
                <div className="row">
                  <div className="col-10">
                    <em>{item.title}</em> &nbsp;
                  </div>
                  <div className='col-2'>

                    <button onClick={()=>dispatch(deletePracticeItem(item))} className='btn btn-danger'>x</button>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default PracticeSchedule