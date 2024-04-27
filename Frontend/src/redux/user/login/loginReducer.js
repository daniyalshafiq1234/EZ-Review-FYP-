import {
    LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE
} from './loginTypes'
  
  const initialState = {
    loading: false,
    requestData: {
        email:'',
        password:''
    },
    responseData:{
        access_token:'',
        refresh_token:''
    },
    isUserLoggedIn:false,
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isUserLoggedIn:true,
          responseData: action.payload
        }
      case LOGIN_USER_FAILURE:
        return {
          ...state,
          loading: false,
          isUserLoggedIn:false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  