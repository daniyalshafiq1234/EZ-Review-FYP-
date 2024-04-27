import {DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_REQUEST,
    DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_SUCCESS,
    DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_FAILURE,
    DYNAMIC_BOARD_INPROGRESS_DOCS_REQUEST ,
    DYNAMIC_BOARD_INPROGRESS_DOCS_SUCCESS ,
    DYNAMIC_BOARD_INPROGRESS_DOCS_FAILURE ,
    DYNAMIC_BOARD_COMPLETED_DOCS_REQUEST ,
    DYNAMIC_BOARD_COMPLETED_DOCS_SUCCESS ,
    DYNAMIC_BOARD_COMPLETED_DOCS_FAILURE,
    DYNAMIC_BOARD_STATE_CHANGED 
  } from './Types'

import {getReviewerNotStartedDocs,getReviewerInProgressDocs,getReviewerCompletedDocs,dynamicBoardStateChangedApi} from '../../../apis/kanbanBoard/dynamic/ReviewerDocs'
    
export const getReviewerNotStartedDocuments = () => {
  
    return async (dispatch) => {
      dispatch(getReviewerNotStartedDocsRequest())
       try{
          let res = await getReviewerNotStartedDocs()
          dispatch(getReviewerNotStartedDocsSuccess(res))
          }
          catch(e){
          dispatch(getReviewerNotStartedDocsFailure(e.message))
          console.log(e)
          }
    }
  }
  
  export const getReviewerNotStartedDocsRequest = () => {
    return {
      type: DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_REQUEST
    }
  }
  
  export const getReviewerNotStartedDocsSuccess = response => {
    return {
      type: DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_SUCCESS,
      payload: response
    }
  }
  
  export const getReviewerNotStartedDocsFailure = error => {
    return {
      type: DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_FAILURE,
      payload: error
    }
  }





 
  export const getReviewerInProgressDocuments = () => {
  
    return async (dispatch) => {
      dispatch(getReviewerInProgressDocsRequest())
       try{
          let res = await getReviewerInProgressDocs()
          dispatch(getReviewerInProgressDocsSuccess(res))
          
          }
          catch(e){
          dispatch(getReviewerInProgressDocsFailure(e.message))
          console.log(e)
          }
    }
  }
  
  export const getReviewerInProgressDocsRequest = () => {
    return {
      type: DYNAMIC_BOARD_INPROGRESS_DOCS_REQUEST
    }
  }
  
  export const getReviewerInProgressDocsSuccess = response => {
    return {
      type: DYNAMIC_BOARD_INPROGRESS_DOCS_SUCCESS,
      payload: response
    }
  }
  
  export const getReviewerInProgressDocsFailure = error => {
    return {
      type: DYNAMIC_BOARD_INPROGRESS_DOCS_FAILURE,
      payload: error
    }
  }






  export const getReviewerCompletedDocuments = () => {
  
    return async (dispatch) => {
      dispatch(getReviewerCompletedDocsRequest())
       try{
          let res = await getReviewerCompletedDocs()
          dispatch(getReviewerCompletedDocsSuccess(res))
          
          }
          catch(e){
          dispatch(getReviewerCompletedDocsFailure(e.message))
          console.log(e)
          }
    }
  }
  
  export const getReviewerCompletedDocsRequest = () => {
    return {
      type: DYNAMIC_BOARD_COMPLETED_DOCS_REQUEST
    }
  }
  
  export const getReviewerCompletedDocsSuccess = response => {
    return {
      type: DYNAMIC_BOARD_COMPLETED_DOCS_SUCCESS,
      payload: response
    }
  }
  
  export const getReviewerCompletedDocsFailure = error => {
    return {
      type: DYNAMIC_BOARD_COMPLETED_DOCS_FAILURE,
      payload: error
    }
  }


  export const dynamicBoardStateChanged = (toColumn,docId) => {
    return async (dispatch) => {
       try{
          let res = await dynamicBoardStateChangedApi(toColumn,docId)
          }
          catch(e){
          console.log(e)
          }
    }
  }