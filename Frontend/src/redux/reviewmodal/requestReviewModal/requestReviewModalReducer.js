import {OPEN_REQUEST_REVIEW_MODAL ,CLOSE_REQUEST_REVIEW_MODAL} from './requestReviewModalTypes'

const initialState = {
    modalClosed:true
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_REQUEST_REVIEW_MODAL:
        return {
            modalClosed: false
        }
      case CLOSE_REQUEST_REVIEW_MODAL:
        return {
            modalClosed:true
        }
      default: return state
    }
  }
  
  export default reducer
  