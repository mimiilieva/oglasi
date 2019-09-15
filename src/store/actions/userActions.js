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