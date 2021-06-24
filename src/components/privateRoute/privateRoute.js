import React, { useEffect, useState } from 'react';

import { Redirect, Route } from 'react-router';




const PrivateRoute = ({ children, ...rest }) => {

    const [login, setLogin] = useState(false)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('userInfo') ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;