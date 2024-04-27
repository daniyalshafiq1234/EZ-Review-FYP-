import {OPEN_BECOME_REVIEWER_MODAL, CLOSE_BECOME_REVIEWER_MODAL} from './becomeReviewerModalTypes'
export const openBecomeReviewerModal = () => {
    return {
      type: OPEN_BECOME_REVIEWER_MODAL
    }
  }
  
  export const closeBecomeReviewerModal = () => {
    return {
      type: CLOSE_BECOME_REVIEWER_MODAL
    }
  }