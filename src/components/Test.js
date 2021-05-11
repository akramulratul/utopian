import React, { useContext } from 'react';
import { UserContext } from '../App';

const Test = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    React.useEffect(() => {
        const data = localStorage.getItem('token')
        if (data) {
            setLoggedInUser(JSON.parse(data))
            // setLoggedInUser("datakjdfjkdsh")
        }

        console.log(data);
        console.log("test");
        console.log(loggedInUser);

    },[])
    return (
        <>

        </>
    );
};

export default Test;