import api from '../../utils/api'

export const login = (email , pass) => {
    return (dispatch) => {
        api.login(email , pass , res =>{
           
            dispatch({
                type : 'LOGIN',
                payload : {
                    email : email,
                    token : res.data.id, //access token from post method
                    userId : res.data.userId

                }
            }) 
            
        })
    }
   
} 
export const logout = (token) => {
    return dispatch => {
        api.logout(token , res =>{
            dispatch({
                type : 'LOGOUT'
            })
        })
    }
}

export const register = (first_name , last_name ,location , phone_number , email , pass) => {
    return dispatch => {
        api.register(first_name , last_name , location , phone_number , email , pass , res =>{
            if(res.status === 200){
                dispatch(login(email,pass))
            }else {
                if(res){
                    dispatch({
                        type : 'SHOW_ERROR',
                        payload : 'Вашиот акаунт веќе постои , ве молиме логирајте се'
                    })
                }
            }
        })
    }
    /*  type: 'REGISTER',
        payload : {name ,email , pass} */
}