import {
    ORG_NAMES_REQUEST,
    ORG_NAMES_SUCCESS,
    ORG_NAMES_FAILURE
} from './OrgTypes'
  
  const initialState = {
    loading: false,
    orgNames:[],
    error: ''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ORG_NAMES_REQUEST:
        return {
          ...state,
          loading: true
        }
      case ORG_NAMES_SUCCESS:
        return {
          ...state,
          loading: false,
          orgNames: action.payload
        }
      case ORG_NAMES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  