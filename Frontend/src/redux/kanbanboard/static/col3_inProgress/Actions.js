import {
  STATICBOARD_INPROGRESS_COL3_REQUEST,
  STATICBOARD_INPROGRESS_COL3_SUCCESS,
  STATICBOARD_INPROGRESS_COL3_FAILURE
} from './Types'
import {getUserInProgressDocs} from '../../../../apis/kanbanBoard/static/GetUserDocs'

export const getUserInProgressDocuments = () => {
  
  return async (dispatch) => {
    dispatch(getInProgressDocsRequest())
     try{
        let res = await getUserInProgressDocs()
        dispatch(getInProgressDocsSuccess(res))
        
        }
        catch(e){
        dispatch(getInProgressDocsFailure(e.message))
        console.log(e)
        }
  }
}

export const getInProgressDocsRequest = () => {
  return {
    type: STATICBOARD_INPROGRESS_COL3_REQUEST
  }
}

export const getInProgressDocsSuccess = response => {
  return {
    type: STATICBOARD_INPROGRESS_COL3_SUCCESS,
    payload: response
  }
}

export const getInProgressDocsFailure = error => {
  return {
    type: STATICBOARD_INPROGRESS_COL3_FAILURE,
    payload: error
  }
}
