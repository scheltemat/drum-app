import React from 'react'
import {useParams} from 'react-router-dom'
import beatData from '../assets/beatData'
import fillData from '../assets/fillData'

const ExerciseDetails = () => {

    const {exerciseID} = useParams()
    console.log(beatData)

  return (
    <>
        {/* <div className='container mx-1 mt-3'>
            <div className='row'>
                <div className="col-12">

                    {beatData.filter(beat =>{

                        console.log(beat.id);
                        console.log(exerciseID)

                        if(beat.id === exerciseID){
                            return (
                                beat.description
                            )
                        }
                    })}

                </div>
            </div>
        </div> */}

    </>
  )
}

export default ExerciseDetails