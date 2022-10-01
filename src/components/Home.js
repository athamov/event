import React from 'react'
import Image from './image/image.jpg'
import {Link} from 'react-router-dom';
// I dont see other medias sorry :(
function Home() {
  return (
    <div className="container w-full ml-44 flex flex-row justify-around">
      <div className="mt-24">
        <img src={Image} alt="dashboard" width="440"/>
      </div>
      <div className="mr-32 flex-end text-right flex flex-col justify-around">
        <div className="mt-306 h-48 text-right flex flex-col">
          <p className="font-bold text-Blue text-6xl leading-snug" >
            Imagine if <br />
            <strong className="blueGradient">Snapchat</strong> <br />
            had events
          </p>
          <p className="font-light text-base text-Black1 leading-7">
            Easily host and share events with your friends <br /> across any social media.
          </p>
        </div>
        <Link to='/create' className="ButtonGradient rounded-xl py-3 px-10 text-white mt-14 text-center">
          🎉 Create my event
        </Link>
      </div>
    </div>
  )
}

export default Home