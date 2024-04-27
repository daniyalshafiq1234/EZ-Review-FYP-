import {
  STATICBOARD_COMPLETED_COL4_REQUEST,
  STATICBOARD_COMPLETED_COL4_SUCCESS,
  STATICBOARD_COMPLETED_COL4_FAILURE
} from './Types'
import {getUserReviewCompletedDocs} from '../../../../apis/kanbanBoard/static/GetUserDocs'

export const getUserReviewCompletedDocuments = () => {
  
  return async (dispatch) => {
    dispatch(getReviewCompletedDocsRequest())
     try{
        let res = await getUserReviewCompletedDocs()
        dispatch(getReviewCompletedDocsSuccess(res))
        }
        catch(e){
        dispatch(getReviewCompletedDocsFailure(e.message))
        console.log(e)
        }
  }
}

export const getReviewCompletedDocsRequest = () => {
  return {
    type: STATICBOARD_COMPLETED_COL4_REQUEST
  }
}

export const getReviewCompletedDocsSuccess = response => {
  return {
    type: STATICBOARD_COMPLETED_COL4_SUCCESS,
    payload: response
  }
}

export const getReviewCompletedDocsFailure = error => {
  return {
    type: STATICBOARD_COMPLETED_COL4_FAILURE,
    payload: error
  }
}
