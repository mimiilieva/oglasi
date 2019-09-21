import api from '../../utils/api'


export const addPost = (post , token) => {
    return(dispatch) => {
        api.addPost(post, token , res => {
            dispatch({
                type: 'POST_ADDED',
                payload : res.data
            })
        })
    }

}
export const getCategories = (token) => {
    return dispatch => {
        api.getCategories(token , res => {
            dispatch({
                type : 'GOT_CATEGORY',
                payload : res.data
            })
        })
    }
}
export const uploadImage = (data ,token , postId , userId) => {
        return dispatch => {
            api.uploadImage(data ,token , postId , userId , res => {
                dispatch({
                    type: 'UPLOADED_IMAGE',
                    payload :  res.data
                })
            })
        }
}

export const getPosts = (token) => {
    return dispatch => {
        api.getPosts(token , res=>{
            dispatch({
                type: 'GOT_POSTS',
                payload : res.data
            })
        })
    }
}
export const deletePost= (postId , token) => {
    return dispatch => {
        api.deletePost(postId, token , res =>{
            dispatch({
                type: 'POST_DELETED',
                payload : res.data
            })
        })
    }
}
export const getUserPosts = (userId , token) => {
    return dispatch =>{
        api.getUserPosts(userId , token , res => {
            dispatch({
                type : 'USER_POSTS',
                payload : res.data
            })
        })
    }
}
export const getPostImage = (postId , token) => {
    return dispatch => {
        api.getPostImage(postId , token , res =>{
            dispatch({
                type : 'IMAGE_POST',
                paylaod : res.data
            })
        })
    }
}
export const getUser = (userId , token) => {
    return dispatch => {
        api.getUser(userId , token , res => {
            dispatch({
                type : 'GOT_USER',
                payload : res.data
            })
        })
    }
}