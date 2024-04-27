import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {
  STATICBOARD_REVIEW_NOTSTARTED_COL2_REQUEST,
  STATICBOARD_REVIEW_NOTSTARTED_COL2_SUCCESS,
  STATICBOARD_REVIEW_NOTSTARTED_COL2_FAILURE
} from './Types'
import {getUserReviewNotStartedDocs} from '../../../../apis/kanbanBoard/static/GetUserDocs'

export const getUserReviewNotStartedDocuments = () => {
  
  return async (dispatch) => {
    dispatch(getReviewNotStartedDocsRequest())
     try{
        let res = await getUserReviewNotStartedDocs()
        dispatch(getReviewNotStartedDocsSuccess(res))
        }
        catch(e){
        dispatch(getReviewNotStartedDocsFailure(e.message))
        console.log(e)
        }
  }
}

export const getReviewNotStartedDocsRequest = () => {
  return {
    type: STATICBOARD_REVIEW_NOTSTARTED_COL2_REQUEST
  }
}

export const getReviewNotStartedDocsSuccess = response => {
  return {
    type: STATICBOARD_REVIEW_NOTSTARTED_COL2_SUCCESS,
    payload: response
  }
}

export const getReviewNotStartedDocsFailure = error => {
  return {
    type: STATICBOARD_REVIEW_NOTSTARTED_COL2_FAILURE,
    payload: error
  }
}
