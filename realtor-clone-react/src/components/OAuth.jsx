import React from 'react'
import { FcGoogle } from "react-icons/fc";

function OAuth() {
    return (
        <button type="submit" className="flex justify-center items-center w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg active:shadow-lg hover:bg-red-700 transition duration-150 ease-in-out active:bg-red-800">
            <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
            Continue with Google
        </button>
    )
}

export default OAuth