import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const login = async (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://91.193.183.139:7000/auth/login`, {
                login,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setUser('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            alert((e.response.data.message) + ' все не ок')
        }
    }
}

