import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen bg-green-500 flex items-center justify-center">
      <div className="w-[500px] h-auto bg-white shadow-lg shadow-gray-500/50">
        <p className="font-bold m-2 text-green-700 cursor-default italic">
          Lapcenter
        </p>
        <p className="text-center mt-7 mb-2 text-3xl font-bold text-green-500">
          LOGIN
        </p>
        <div className="w-[200px] mx-[150px] border-b-2 border-green-500" />
        <div className="p-8">
          <p className="font-semibold mb-1">Username</p>
          <input
            className="w-full p-2 border-[1px] border-green-500 bg-white outline-none"
            type="text"
          />
          <p className="font-semibold mb-1 mt-3">Password</p>
          <input
            className="w-full p-2 border-[1px] border-green-500 bg-white outline-none"
            type="password"
          />
          <div className="w-[100px] bg-green-500 m-auto mt-4 p-2 rounded hover:bg-green-600 cursor-pointer">
            <p className="text-center text-white font-semibold">Login</p>
          </div>
          <div className="w-[175px] m-auto" onClick={() => navigate('/')}>
            <p className="text-green-600 hover:text-green-700 cursor-pointer mt-3">
              Register a new account
            </p>
          </div>
          <div className="w-[105px]" onClick={() => navigate('/')}>
            <p className="underline hover:text-green-500 cursor-pointer mt-3">
              Back to home
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

