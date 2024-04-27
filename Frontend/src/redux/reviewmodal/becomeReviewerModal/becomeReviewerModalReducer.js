import {OPEN_BECOME_REVIEWER_MODAL, CLOSE_BECOME_REVIEWER_MODAL} from './becomeReviewerModalTypes'

const initialState = {
    modalClosed:true
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_BECOME_REVIEWER_MODAL:
        return {
            modalClosed: false
        }
      case CLOSE_BECOME_REVIEWER_MODAL:
        return {
            modalClosed:true
        }
      default: return state
    }
  }
  
  export default reducer
  