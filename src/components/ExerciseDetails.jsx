import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import PracticeSchedule from './PracticeSchedule'
import { addToPractice } from '../actions/actions';

const ExerciseDetails = () => {

    
    const [details, setDetails] = useState({})
    const [data, setData] = useState([])

    const {exerciseID} = useParams()
    const dispatch = useDispatch()

    const beatData = useSelector(state => state.beats)
    const fillData = useSelector(state => state.fills)

    useEffect(() => {

        let beatArr = beatData.filter(beat =>{
            return beat.id === exerciseID 
        })

        let fillArr = fillData.filter(fill =>{
            return fill.id === exerciseID 
        })

        setDetails(beatArr[0] || fillArr[0])

        // getVideos()

    }, [])

    useEffect(() => {
        if(details.title !== undefined){ // only loads data if data obj is not empty

            getVideos()
        }

    }, [details])

    const getVideos = async () => {

        console.log(details)

        let replacedTitle = details.title == undefined ? '' : details.title.replace(/\s/g, '%20')

        let results = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=5&q=${replacedTitle}&topicId=drums&categoryId=music&key=AIzaSyBOuh5X0NbNoMD-3rsFltkNnwSLbl-dvZ4`)

        let data = await results.json();

        console.log(data) // whole object from youtube api
        console.log(data.items[0]); //array of video objects

        setData(data.items) // putting data into state so the DOM can grab it
    }
    

  return (
    <>

    <div className='container-fluid mt-3'>
      <div className='row px-3'>
        <div className='col-3'>
          <h5>Practice Schedule</h5>

          <PracticeSchedule />
        </div>
        <div className="col-9">

            <div className="row mb-4">

                <a href='/exercises'>Back to Exercises</a>
            </div>
            
            <div className="row">
                <div className="col-12 mb-3">
                    <h2>{details.title}</h2>
                    <p>Difficulty: {details.difficulty}</p>
                </div>

                <div className='col-12'>
                    <iframe key={details.id} src={`https://flat.io/embed/${details.embedSrc}?zoom=-6`} height="500" width="100%" frameBorder="0" allowFullScreen allow="midi"></iframe>
                </div>

                <Button onClick={()=>dispatch(addToPractice(details))} variant="warning">Add to Practice Schedule</Button>

                <div className="col-12 mt-4 mb-4">
                    {details.description}
                </div>
            </div>

            <div className='row'>

                <div className="col-12 mb-5">
            
                    <Carousel>
                        {data.map(video =>{
                            return(
                                <Carousel.Item>
                                    <iframe width="100%" height="415" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
    
            </div>
            
        </div>
    </div>
    </div>

    </>
  )
}

export default ExerciseDetails