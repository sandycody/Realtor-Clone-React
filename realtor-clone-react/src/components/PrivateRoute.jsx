import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  } 
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

/* Purpose:
The primary purpose of using Outlet here is to allow for nested routing within the PrivateRoute. This means that the PrivateRoute can define its own set of child routes (like "/profile") that will be conditionally rendered based on the authentication status (loggedIn).

Conditional Rendering:

If loggedIn is true, the <Outlet /> will render the child routes defined within PrivateRoute. In this case, it would render the Profile component when navigating to "/profile".

If loggedIn is false, the <Navigate to="/sign-in" /> will redirect the user to the sign-in page. */

export default PrivateRoute;