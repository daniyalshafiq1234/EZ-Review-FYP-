import {
    UPLOAD_DOCS_REQUEST,UPLOAD_DOCS_SUCCESS,
    UPLOAD_DOCS_FAILURE,UPLOADING_DOCS,SET_DOC_METADATA
} from './documentTypes'
  
  const initialState = {
    docs: [],
    docsMetadata: {
        domain:'',
        organizationName:'',
        title:''
    },
    responseData:{
        responseMessage:''
    },
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_DOCS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case UPLOAD_DOCS_SUCCESS:
        return {
          ...state,
          loading: false,
          responseData: action.payload
        }
      case UPLOAD_DOCS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
       case UPLOADING_DOCS:
        return {
          ...state,
          docs:action.payload
        } 
       case SET_DOC_METADATA:
        return {
            ...state,
            docsMetadata:action.payload  
        }   
      default: return state
    }
  }
  
  export default reducer
  