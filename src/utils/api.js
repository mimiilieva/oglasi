import axios from 'axios'

const host = 'http://localhost:8080';



const api = {

    login : (email , pass, success) => {
        axios.post(`${host}/api/users/login`, {email : email , password : pass})
        .then(res => {
            success(res);
        })
},
    register: (first_name , last_name , location , phone_number , email , pass , success) => {
        axios.post(`${host}/api/users`,{
            first_name : first_name,
            last_name : last_name,
            location : location,
            phone_number : phone_number,
            email : email,
            password : pass,
        })
        .then(res => {
            success(res)
        })
    }



}
export default api