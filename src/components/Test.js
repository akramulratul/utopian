import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';

const Test = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLoggedInUser(JSON.parse(localStorage.getItem('token')).data.token)
        }
    }, [setLoggedInUser])
    return (
        <>

        </>
    );
};

export default Test;