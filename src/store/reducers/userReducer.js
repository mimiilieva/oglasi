const defaultState = {
    currentUser : [],
    posts : [],
    userPosts : [],
    post : [],
    categories : [],
    image : ""
}


const user = (state = defaultState , action) => {
    switch(action.type){
        case 'POST_ADDED' :
            return{
                ...state,
                posts: state.posts.concat(action.payload),
                post: []
            }
        case 'UPLOADED_IMAGE' :
            return{
                ...state,
                post : {
                    ...state.post,
                    PostImage : [action.payload]
                }
            } 
        case 'GOT_CATEGORY' : 
            return {
                ...state ,
                categories : action.payload
            }
        case 'GOT_POSTS':
            return{
                ...state,
                posts : action.payload
            }
        case 'IMAGE_POST' :
            return {
                ...state,
                image : action.payload
            }
        case 'GOT_USER' :
            return {
                ...state,
                currentUser : action.payload
            }
        case 'POST_DELETED' :
            return{
                ...state
            }
        case 'USER_POSTS' :
            return {
                ...state,
                userPosts : action.payload
            }
        default :
        return state
        
    }
}
export default user