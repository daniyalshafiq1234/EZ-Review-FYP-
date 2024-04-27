import {SET_AVAILABILITY_AS_REVIEWER_TRUE , SET_AVAILABILITY_AS_REVIEWER_FALSE} from './reviewStatusToggleTypes'
  
  const initialState = {
    available:false
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AVAILABILITY_AS_REVIEWER_TRUE:
        return {
            available: true
        }
      case SET_AVAILABILITY_AS_REVIEWER_FALSE:
        return {
            available:false
        }
      default: return state
    }
  }
  
  export default reducer
  