import axios from 'axios'

export const registration = async (login, password) => {
    try {
        const response = await axios.post(`http://91.193.183.139:7000/auth/register`, {
            login,
            password
        })

        alert((response.data) + ' все ок')
        console.log(response.data)
    } catch (e) {
        alert((e.response.data.message) + ' все не ок')
    }

}

//выводится что все ок, но вместо пароля и логина undefined???