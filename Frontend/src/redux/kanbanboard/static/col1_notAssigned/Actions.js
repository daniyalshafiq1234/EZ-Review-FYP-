import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {
    STATICBOARD_NOTASSIGNED_COL1_REQUEST,STATICBOARD_NOTASSIGNED_COL1_SUCCESS,
    STATICBOARD_NOTASSIGNED_COL1_FAILURE
} from './Types'
import {getUserNotAssignedDocs} from '../../../../apis/kanbanBoard/static/GetUserDocs'

export const getUserNotAssignedDocuments = () => {
  
  return async (dispatch) => {
    dispatch(getNotAssignedDocsRequest())
     try{
        let res = await getUserNotAssignedDocs()
        dispatch(getNotAssignedDocsSuccess(res))
        
        }
        catch(e){
        dispatch(getNotAssignedDocsFailure(e.message))
        console.log(e)
        }
  }
}

export const getNotAssignedDocsRequest = () => {
  return {
    type: STATICBOARD_NOTASSIGNED_COL1_REQUEST
  }
}

export const getNotAssignedDocsSuccess = response => {
  return {
    type: STATICBOARD_NOTASSIGNED_COL1_SUCCESS,
    payload: response
  }
}

export const getNotAssignedDocsFailure = error => {
  return {
    type: STATICBOARD_NOTASSIGNED_COL1_FAILURE,
    payload: error
  }
}
