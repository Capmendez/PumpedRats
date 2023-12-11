import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'


const VideoContainer = styled.div`
width: 100%;
// margin-top: -120px;

video{
    width: 70%;
    border-radius: 10px;
    // height: 50%;
    // margin-top: -120px;
}

@media (max-width: 64em) {
  min-width: 50vh;
  text-align: center; 

  // video {
  //   width; 50%;
  // }
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/GIF" autoPlay muted loop  /> 
        {/* <img src={GIF} alt='/' /> */}
    </VideoContainer>
  )
}

export default CoverVideo