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
    },
    addPost: (post, token, success) => {
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then(res => {
            success(res);
        });
    },
    getCategories : (token ,success) => {
        axios.get(`${host}/api/Categories?access_token=${token}`)
        .then(res => {
            success(res)
        })
    },
    getPosts : (token , success) => {
        axios.get(`${host}/api/Posts?access_token=${token}`)
        .then(res =>{
            success(res)
        })
    },

    getPostImage : (postId) => {
        axios.get(`${host}/api/Posts/${postId}/PostImage`)
        
    },
    uploadImage: (data, token, postId, userId, success) => {
        axios.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
        .then(res => {
            success(res);
        })
    },
    makeFileURL: (url, token) => {
        return host + url + "?access_token=" + token;
    },
    
    getUser : (userId , token , success) => {
        axios.get(`${host}/api/users/${userId}?access_token=${token}`)
        .then(res => {
            success(res)
        })
    },
    
    getUserPosts : (userId , token , success) => {
        axios.get(`${host}/api/users/${userId}/Post?access_token=${token}`)
        .then(res => {
            success(res)
        })
    },
    deletePost: (postId , token , success) => {
        axios.delete(`${host}/api/Posts/${postId}?access_token=${token}`)
        .then(res =>{
            success(res)
        })
    },
    logout : (token , success) => {
        axios.post(`${host}/api/users/logout?access_token=${token}`)
        .then(res =>{
            success(res)
        })
    }




}
export default api