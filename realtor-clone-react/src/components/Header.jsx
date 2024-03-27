import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
    const [pageState, setPageState] = useState("Sign In");
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPageState("Profile");
            } else {
                setPageState("Sign In");
            }
        });
    }, [auth]);
    
    function pathMatchRoute(route) {
        return route === location.pathname;
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-10'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Realtor_Logo"
                        className='h-5 cursor-pointer'
                        onClick={() => navigate('/')}
                    />
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`py-3 cursor-pointer text-sm font-semibold ${pathMatchRoute('/') ? "text-black border-b-2 border-red-500" : "text-gray-400"}`} onClick={() => navigate('/')}>
                            Home
                        </li>
                        <li className={`py-3 cursor-pointer text-sm font-semibold ${pathMatchRoute('/offers') ? "text-black border-b-2 border-red-500" : "text-gray-400"}`} onClick={() => navigate('/offers')}>
                            Offers
                        </li>
                        <li className={`py-3 cursor-pointer text-sm font-semibold ${(pathMatchRoute('/sign-in') || pathMatchRoute('/profile')) ? "text-black border-b-2 border-red-500" : "text-gray-400"}`} onClick={() => navigate('/profile')}>
                            {pageState}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
