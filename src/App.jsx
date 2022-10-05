import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import PracticeSchedule from './components/PracticeSchedule'
import Button from 'react-bootstrap/Button';
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GiMusicalScore } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";

const App = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/exercises')
  }

  useEffect(() => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  }, [])
  

  return (
    <>

    <div className='container-fluid'>
      <div className='row '>
        <div className="col-12 p-0">
          <div className='d-flex' id='image-container'>
            <img src="/images/drummer.jpg" alt="" width="100%"/>
            <div class="hero-container" data-aos="fade-in">
              <h2>Welcome to OnBeat</h2>
              <p>For Learning, Practicing, Rehearsing</p>
              <Button onClick={handleClick} variant="light">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly pt-3">
        <div className="col-3" id='home-page-info'>
          <div className='home-page-details'>
            <div className='mb-4'>
              <BsMusicNoteBeamed style={{fontSize: '70px'}}/>
            </div>
            <h4>Exercises</h4>
            <p>Look through our list of exercises, ranging in skill from beginner to the advanced player</p>
          </div>
        </div>
        <div className="col-3" id='home-page-info'>
          <div className='home-page-details'>
            <div className='mb-4'>
              <GiMusicalScore style={{fontSize: '70px'}}/>
            </div>
            <h4>Details</h4>
            <p>Click on any exercise to get more details, including YouTube videos to help your learning process.</p>
          </div>
        </div>
        <div className="col-3" id='home-page-info'>
          <div className='home-page-details'>
            <div className='mb-4'>
              <SiYoutubemusic style={{fontSize: '70px'}}/>
            </div>
            <h4>Practice</h4>
            <p>Add exercises to your practice schedule to work on them now &#40;or later&#41;. Remove them at any time.</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App