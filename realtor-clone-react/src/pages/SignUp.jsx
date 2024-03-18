import { Link } from "react-router-dom"
import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import OAuth from "../components/OAuth";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww"
            alt="key"
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input className='w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white rounded-md border-gray-300 transition ease-in-out' type="text" id="name" value={name} placeholder='Full Name' onChange={onChange} />

            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white rounded-md border-gray-300 transition ease-in-out' type="email" id="email" value={email} placeholder='Email Address' onChange={onChange} />

            <div className='relative left-50 mt-2 mb-6'>
              <input className='w-full px-4 py-2 mt-4 text-xl text-gray-700 bg-white rounded-md border-gray-300 transition ease-in-out' type={showPassword ? "text" : "password"} id="password" value={password} placeholder='Password' onChange={onChange} />

              {showPassword ? <AiOutlineEyeInvisible className='absolute right-3 top-7 text-2xl cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)}
              /> :
                <AiOutlineEye className='absolute right-3 top-7 text-2xl cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)} />}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">Have an account?
                <Link className='ml-1 text-red-600 hover:text-red-700 transition duration-200 ease-in-out' to="/sign-in">Sign In</Link>
              </p>
              <p>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Forgot Password?</Link>
              </p>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Sign Up</button>
            <div className="flex items-center my-4  before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp