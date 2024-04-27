import {
    UPLOAD_DOCS_REQUEST,UPLOAD_DOCS_SUCCESS,
    UPLOAD_DOCS_FAILURE,UPLOADING_DOCS,SET_DOC_METADATA
} from './documentTypes'
import {uploadDocsApi} from '../../apis/Docs'
import {openGetReviewAlert} from '../alerts/getreview/GetReviewAlertActions'
import {closeInitiateReviewModal} from '../reviewmodal/initiateReviewModal/initiateReviewModalActions'
export const uploadDocs = (data) => {

  return async (dispatch) => {
    dispatch(uploadDocsRequest())
     try{
        
        let res = await uploadDocsApi(data)
        dispatch(uploadDocsSuccess(res))
        dispatch(closeInitiateReviewModal())
        dispatch(openGetReviewAlert())
        }
        catch(e){
        dispatch(uploadDocsFailure(e.message)) 
        }
  }
}
export const uploadingDocs = (data) => {
   
    return {
      type: UPLOADING_DOCS,
      payload:data
    }
}

export const uploadDocsRequest = () => {
  return {
    type: UPLOAD_DOCS_REQUEST
  }
}

export const uploadDocsSuccess = response => {
  return {
    type: UPLOAD_DOCS_SUCCESS,
    payload: response
  }
}

export const uploadDocsFailure = error => {
  return {
    type: UPLOAD_DOCS_FAILURE,
    payload: error
  }
}
export const setDocsMetadata = (data) => {
    
    return {
      type: SET_DOC_METADATA,
      payload:data
    }
}