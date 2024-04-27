import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from './registerTypes'
import {registerUserApi} from '../../../apis/User'

export const registerUser = (formData) => {
  return async (dispatch) => {
    dispatch(registerUserRequest())
     try{
        let res = await registerUserApi(formData)
        dispatch(registerUserSuccess(res))
        }
        catch(e){
        dispatch(registerUserFailure(e.message))
        //we can show pop ups according to error responses here
        console.log(e)
        }
  }
}

export const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST
  }
}

export const registerUserSuccess = response => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: response
  }
}

export const registerUserFailure = error => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error
  }
}
