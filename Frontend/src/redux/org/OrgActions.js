import { useSelector, useDispatch } from 'react-redux'
import {
    ORG_NAMES_REQUEST,
    ORG_NAMES_SUCCESS,
    ORG_NAMES_FAILURE
} from './OrgTypes'
import { getAllOrgsNames } from '../../apis/Organization';

export const getAllOrganizationsNames = () => {
  
  return async (dispatch) => {
    dispatch(orgsNameRequest())
     try{
        let res = await getAllOrgsNames()
        dispatch(orgsNameSuccess(res))
        }
        catch(e){
        dispatch(orgsNameFailure(e.message))
        //we can show pop ups according to error responses here
        console.log(e)
        }
  }
}

export const orgsNameRequest = () => {
  return {
    type:ORG_NAMES_REQUEST,

  }
}

export const orgsNameSuccess = response => {
  return {
    type: ORG_NAMES_SUCCESS,
    payload: response
  }
}

export const orgsNameFailure = error => {
  return {
    type: ORG_NAMES_FAILURE,
    payload: error
  }
}
