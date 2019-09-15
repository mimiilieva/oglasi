const defaultState = {
    users : [],
    posts : [],
    post : [] 
}


const user = (state = defaultState , action) => {
    switch(action.type){
        case 'POST_ADDED' :
            return{
                ...state,
                posts: state.posts.concat(action.payload),
                post:action.payload
            }
        case 'UPLOADED_IMAGE' :
            return{
                ...state,
                post : {
                    ...state.post,
                    PostImage : [action.payload]
                }
            }   
        default :
        return state
    }
}
export default user