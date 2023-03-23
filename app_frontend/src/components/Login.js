import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import logoWhite from "../assets/logowhite.png"
import shareVideo from '../assets/share.mp4'


const Login = () => {

  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          loop
          autoPlay={true}
          controls={false}
          muted
          className='w-full h-full object-cover' />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 right-0 left-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logoWhite} alt="logo" width="130px" />
        </div>
        <div className="shadow-2xl">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
            render={(renderProps) => (
              <button
                type="button"
                className='bg-mainColor flex items-center justify-center p-3 cursor-pointer rounded-lg outline-none'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              > <FcGoogle className='mr-4' />
                Sign in With google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
