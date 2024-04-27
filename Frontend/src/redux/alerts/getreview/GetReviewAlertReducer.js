import {OPEN_GET_REVIEW_ALERT ,CLOSE_GET_REVIEW_ALERT} from './GetReviewAlertTypes'

const initialState = {
    alertClosed:true
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_GET_REVIEW_ALERT:
        return {
            alertClosed: false
        }
      case CLOSE_GET_REVIEW_ALERT:
        return {
            alertClosed:true
        }
      default: return state
    }
  }
  
  export default reducer
  