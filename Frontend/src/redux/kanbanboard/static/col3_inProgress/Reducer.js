import {
  STATICBOARD_INPROGRESS_COL3_REQUEST,
  STATICBOARD_INPROGRESS_COL3_SUCCESS,
  STATICBOARD_INPROGRESS_COL3_FAILURE
} from './Types'
  
  const initialState = {
    loading: false,
    inProgressDocs:[],
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STATICBOARD_INPROGRESS_COL3_REQUEST:
        return {
          ...state,
          loading: true
        }
      case STATICBOARD_INPROGRESS_COL3_SUCCESS:
        return {
          ...state,
          loading: false,
          inProgressDocs: action.payload
        }
      case STATICBOARD_INPROGRESS_COL3_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  