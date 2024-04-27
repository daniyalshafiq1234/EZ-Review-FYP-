import {
  STATICBOARD_COMPLETED_COL4_REQUEST,
  STATICBOARD_COMPLETED_COL4_SUCCESS,
  STATICBOARD_COMPLETED_COL4_FAILURE
} from './Types'
  
  const initialState = {
    loading: false,
    completedDocs:[],
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STATICBOARD_COMPLETED_COL4_REQUEST:
        return {
          ...state,
          loading: true
        }
      case STATICBOARD_COMPLETED_COL4_SUCCESS:
        return {
          ...state,
          loading: false,
          completedDocs: action.payload
        }
      case STATICBOARD_COMPLETED_COL4_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  