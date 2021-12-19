import React from 'react';

import { useAuthStatus } from '../hooks/auth';

import Dashboard from "./Dashboard";
import Home from "./Home";
import {CircularProgress} from "@material-ui/core";

const ProtectedRoute = ({ component: Component }) => {
    // a custom hook to keep track of user's auth status
    const { loggedIn, checkingStatus } = useAuthStatus();

    return (
        <>
            {
                // display a spinner while auth status being checked
                checkingStatus
                    ? <CircularProgress />
                    : loggedIn
                        // if user is logged in, grant the access to the route
                        // note: in this example component is Bar
                        ? <Dashboard />
                        // else render an unauthorised component
                        // stating the reason why it cannot access the route
                        : <Home />
            }
        </>
    );
};

export default ProtectedRoute;
