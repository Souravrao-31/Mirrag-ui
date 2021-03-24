// export default function Team(){
//     return (
//         <h1 className= "text-center underline rounded-lg"> Teams</h1>
//     )
// }

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../Lottie/33944-video-camera-selfie-video-device-upload-video.json'

class Team extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
       <h1 className= "text-center underline text-4xl font-serif align-middle pt-6 animate-bounce"> Teams </h1>
        
        <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
      </div>
    )
  }
}

export default Team