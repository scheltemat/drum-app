import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { deletePracticeItem } from '../actions/actions';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import {keys} from '../secret'

const PracticeRoom = () => {

  const [details, setDetails] = useState([])
  const [data, setData] = useState([])

  const dispatch = useDispatch()
  const practiceSchedule = useSelector(state => state.practiceSchedule)
  const howManyThingsToPractice = useSelector(state => state.howManyThingsToPractice)

  useEffect(() => {

    // console.log(practiceSchedule)
    setDetails(practiceSchedule)
  }, [])

  
  useEffect(() => {
    // const checking = async () => {
      
    //   let videos = []
    //   if(details.length > 0){ // only loads data if data obj is not empty

    //       videos = await getVideos()
    //       console.log(videos)
    //   }
    //   return videos
    // }
    // checking().then((result)=>{
    //   setData(result)
    // })

  }, [details])


  const getVideos = async () => {

    console.log(details)

    let dataArr = await Promise.all(details.map(async (detailObj, index) =>{

      let replacedTitle = detailObj.title == undefined ? '' : detailObj.title.replace(/\s/g, '%20')

      let results = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=5&q=${replacedTitle}&topicId=drums&categoryId=music&key=${keys.key1}`)

      let data = await results.json();

      // console.log(data);
      return data
    }))

    console.log(dataArr); //array of video objects
    return dataArr
  }


  return (
    <>
      <div className='container-fluid mx-1 mt-3'>

        <h2>Your Practice Schedule</h2>

        {
        practiceSchedule.length === 0 ? 
        <div>...is empty</div> : 
        <div></div>
        }

        {practiceSchedule.map((item, index) =>{
          return (

            <div key={item.title} className="row my-4">

              <div className="col-lg-6 col-sm-12 mb-4">
                <div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>Difficulty: {item.difficulty}</p>
                  </div>

                  <div className='mb-1'>
                    <iframe key={item.id} src={`https://flat.io/embed/${item.embedSrc}?zoom=-6`} height="350" width="100%" frameBorder="0" allowFullScreen allow="midi"></iframe>
                  </div>
                  
                  <Button onClick={()=>{dispatch(deletePracticeItem(item));
                  setData(data.slice(0, index).concat(data.slice(index + 1)))}} variant="danger">Remove From Practice Schedule</Button>
                </div>

              </div>
              {data.length > 0 ? 
                (<div className="col-lg-6 col-sm-12">
                  <Carousel>
                    {data[index].items.map(titles =>{
                      return (
                        <Carousel.Item>
                          <iframe width="100%" height="415" src={`https://www.youtube.com/embed/${titles.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </Carousel.Item>
                      )
                    })}
                  </Carousel>
                </div>)
              :
              null
        }
            </div>
          )
        })}

      </div>

    </>
  )
}

export default PracticeRoom