import axios from "axios"
import { toast } from "react-toastify"


export const login = (userName, password) => async (dispatch) => {

    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST',
        })

        const userData = {
            password: password,
            username: userName
        }


        fetch('https://utopain-backend.herokuapp.com/auth/signIn', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'USER_LOGIN_SUCCESS',
                    payload: data
                })
                if (data.statusCode !== 200) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                // });
                console.log(data);

                if (data.statusCode === 200) {
                    localStorage.setItem('userInfo', JSON.stringify(data))
                }
            })




    } catch (error) {
        console.log(error);
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: 'USER_LOGOUT'
    })
}

export const registerNewUser = (userData) => async (dispatch) => {
    console.log(userData);
    try {
        dispatch({
            type: 'USER_REGISTRATION_REQUEST'
        })

        fetch('https://utopain-backend.herokuapp.com/auth/signUp', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    type: 'USER_REGISTRATION_SUCCESS',
                    payload: data
                })
                if (data.statusCode !== 201) {
                    toast.error(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                // localStorage.setItem('userInfo', JSON.stringify(data))
            })


    } catch (error) {
        console.log(error);
        dispatch({
            type: 'USER_REGISTRATION_FAIL',
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const getUserProfile = () => async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const { data: { token } } = userInfo
    console.log(token);
    try {
        dispatch({
            type: 'USER_PROFILEDETAILS_REQUEST',
            payload: {}
        })

        const config = {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }

        const { data } = await axios.get('https://utopain-backend.herokuapp.com/auth/profile', config)
        dispatch({
            type: 'USER_PROFILEDETAILS_SUCCESS',
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: 'USER_PROFILEDETAILS_FAIL',
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}