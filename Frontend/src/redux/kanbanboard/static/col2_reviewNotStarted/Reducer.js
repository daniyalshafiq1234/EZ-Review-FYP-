import {
  STATICBOARD_REVIEW_NOTSTARTED_COL2_REQUEST,
  STATICBOARD_REVIEW_NOTSTARTED_COL2_SUCCESS,
  STATICBOARD_REVIEW_NOTSTARTED_COL2_FAILURE
} from './Types'
  
  const initialState = {
    loading: false,
    reviewNotStartedDocs:[],
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STATICBOARD_REVIEW_NOTSTARTED_COL2_REQUEST:
        return {
          ...state,
          loading: true
        }
      case STATICBOARD_REVIEW_NOTSTARTED_COL2_SUCCESS:
        return {
          ...state,
          loading: false,
          reviewNotStartedDocs: action.payload
        }
      case STATICBOARD_REVIEW_NOTSTARTED_COL2_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  