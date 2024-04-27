import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {
    LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from './loginTypes'
import {loginUserApi} from '../../../apis/User'
import { saveToken } from '../../token/tokenActions';


export const loginUser = (formData) => {
  
  return async (dispatch) => {
    dispatch(loginUserRequest())
     try{
        let res = await loginUserApi(formData)
        dispatch(loginUserSuccess(res))
        let token = res.data.access_token 
        localStorage.setItem("ezreviewjwttoken",token)  //Abhi k liye,change this later
        dispatch(saveToken(token))
        }
        catch(e){
        dispatch(loginUserFailure(e.message))
        //we can show pop ups according to error responses here
        console.log(e)
        }
  }
}

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export const loginUserSuccess = response => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response
  }
}

export const loginUserFailure = error => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  }
}
