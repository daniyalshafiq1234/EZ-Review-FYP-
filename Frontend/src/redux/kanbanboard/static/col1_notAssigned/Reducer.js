import {
    STATICBOARD_NOTASSIGNED_COL1_REQUEST,STATICBOARD_NOTASSIGNED_COL1_SUCCESS,
    STATICBOARD_NOTASSIGNED_COL1_FAILURE
} from './Types'
  
  const initialState = {
    loading: false,
    notAssignedDocs:[],
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STATICBOARD_NOTASSIGNED_COL1_REQUEST:
        return {
          ...state,
          loading: true
        }
      case STATICBOARD_NOTASSIGNED_COL1_SUCCESS:
        return {
          ...state,
          loading: false,
          notAssignedDocs: action.payload
        }
      case STATICBOARD_NOTASSIGNED_COL1_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  