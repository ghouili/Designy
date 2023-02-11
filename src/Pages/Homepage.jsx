import './Homepage.css';
import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import ShowCase3D from '../Components/ShowCase3D/ShowCase3D';
import SideControll from '../Components/SideControll/SideControll';

const Homepage = () => {
  return (
    <div className='flex flex-col h-screen'>
    <Navbar />
    {/* <div className="flex-1 relative border-red-900">
        <ShowCase3D />
    </div> */}
    <SideControll >
        <ShowCase3D />
    </SideControll>
    </div>
  )
}

export default Homepage