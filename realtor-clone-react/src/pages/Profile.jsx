import React, { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const { name, email } = formData; //Object destructuring
  function onLogOut() {
    auth.signOut();
    navigate('/');
  }
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            {/* Name Input */}

            <input type="text" id="name" value={name} placeholder='Name' disabled className='w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' />

            {/* Email Input */}

            <input type="email" id="email" value={email} placeholder='Email Address' disabled className='w-full px-4 py-2 mb-6 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">Do you want to change your name?
                <span className='ml-1 text-red-600 hover:text-red-700 transition duration-200 ease-in-out cursor-pointer'>Edit</span>
              </p>
              <p onClick={onLogOut} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign Out</p>
            </div>
          </form>
        </div>
      </section>
    </>

  )
}

export default Profile