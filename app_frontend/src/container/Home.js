import React, { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

import { Sidebar, UserProfile } from '../components'
import { client } from '../client'
import logo from '../assets/logo.png'
import { userQuery } from '../utils/data'

const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  let userInfoStr = localStorage.getItem("user")
  const userInfo = userInfoStr !== undefined ? JSON.parse(userInfoStr) : localStorage.clear()

  useEffect(() => {
    // sub is google id in the google login 
    const query = userQuery(userInfo?.sub)

    client.fetch(query)
      .then(data => {
        setUser(data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height ease-out duration-75'>

      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>

      <div className="flex md:hidden flex-row">
        <HiMenu fontSize={40} className="cursor-pointer"
          onClick={() => setToggleSidebar(!toggleSidebar)} />
        <Link to={"/"}>
          <img src={logo} alt="logo" className='w-28' />
        </Link>
        <Link to={`/userprofile/${user?._id}`}>
          <img src={user?.image} alt="avatar" className='w-28' />
        </Link>
      </div>
      <UserProfile />
    </div>
  )
}

export default Home
