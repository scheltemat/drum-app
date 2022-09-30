import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Button from 'react-bootstrap/Button';

import PracticeSchedule from './PracticeSchedule'

const ExerciseDetails = () => {

    
    const [details, setDetails] = useState({})

    const {exerciseID} = useParams()

    const beatData = useSelector(state => state.beats)
    const fillData = useSelector(state => state.fills)

    useEffect(() => {

        let beatArr = beatData.filter(beat =>{
            return beat.id === exerciseID 
        })

        let fillArr = fillData.filter(fill =>{
            return fill.id === exerciseID 
        })

        // console.log(beatArr[0]);

        setDetails(beatArr[0] || fillArr[0])

        // console.log(details);
        getVideos()

    }, [])
    

    const getVideos = async () => {

        console.log(details)

        let replacedTitle = details.title == undefined ? '' : details.title.replace(/\s/g, '%20')

        let results = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=5&q=${replacedTitle}&topicId=drums&categoryId=music&key=AIzaSyBOuh5X0NbNoMD-3rsFltkNnwSLbl-dvZ4`)

        let data = await results.json();
        console.log(data)
    }
    

  return (
    <>

    <div className='container mx-1 mt-3'>
      <div className='row'>
        <div className='col-4'>
          <h5>Practice Schedule</h5>

          <PracticeSchedule />
        </div>
        <div className="col-8">

            <div className="row mb-4">

                <a href='/exercises'>Back to Exercises</a>
            </div>
            
            <div className="row">
                <div className="col-12 mb-3">
                    <h2>{details.title}</h2>
                    <p>Difficulty: {details.difficulty}</p>
                </div>

                <div className='col-12'>
                    <iframe key={details.id} src={`https://flat.io/embed/${details.embedSrc}?zoom=-6`} height="400" width="100%" frameBorder="0" allowFullScreen allow="midi"></iframe>
                </div>

                <Button variant="warning">Add to Practice Schedule</Button>

                <div className="col-12 mt-4">
                    {details.description}
                </div>
            </div>
            
        </div>



        {/* <div className='container mx-1 mt-3'>
            <div className='row'>
                <div className="col-12">

                    {details.description}

                </div>
            </div>
        </div> */}
    </div>
    </div>

    </>
  )
}

export default ExerciseDetails