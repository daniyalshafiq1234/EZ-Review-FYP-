import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE
} from './registerTypes'
  
  const initialState = {
    loading: false,
    requestData: {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      password:''
    },
    registrationSuccess:false,
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          registrationSuccess:true,
          error:''
        }
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          loading: false,
          registrationSuccess:false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  