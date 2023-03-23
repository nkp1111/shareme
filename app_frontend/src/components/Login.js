import React from 'react'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";

import { FcGoogle } from 'react-icons/fc'
import logoWhite from "../assets/logowhite.png"
import shareVideo from '../assets/share.mp4'


const Login = () => {

  const addUser = (userinfo) => {
    console.log(userinfo)
    localStorage.setItem("user", JSON.stringify(userinfo))

    const { name, picture, sub: googleId } = userinfo
    const doc = {
      _id: googleId,
      _type: "user",
      username: name,
      image: picture
    }
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      {/* background video  */}
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          loop
          autoPlay={true}
          controls={false}
          muted
          className='w-full h-full object-cover' />
      </div>
      {/* login button  */}
      <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 bg-blackOverlay">
        {/* logo  */}
        <div className="p-5">
          <img src={logoWhite} alt="logo" width="130px" />
        </div>
        {/* google login button  */}
        <div className="shadow-2xl">
          <GoogleLogin
            render={(renderProps) => (
              <button
                type="button"
                className='bg-mainColor flex items-center justify-center p-3 cursor-pointer rounded-lg outline-none'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className='mr-4' /> Sign in with Google
              </button>
            )}
            onSuccess={response => {
              const token = response.credential;
              const decoded = jwt_decode(token);
              addUser(decoded)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
