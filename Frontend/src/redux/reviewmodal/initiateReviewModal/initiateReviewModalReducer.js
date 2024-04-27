import {OPEN_INITIATE_REVIEW_MODAL ,CLOSE_INITIATE_REVIEW_MODAL} from './initiateReviewModalTypes'

const initialState = {
    modalClosed:true
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_INITIATE_REVIEW_MODAL:
        return {
            modalClosed: false
        }
      case CLOSE_INITIATE_REVIEW_MODAL:
        return {
            modalClosed:true
        }
      default: return state
    }
  }
  
  export default reducer
  