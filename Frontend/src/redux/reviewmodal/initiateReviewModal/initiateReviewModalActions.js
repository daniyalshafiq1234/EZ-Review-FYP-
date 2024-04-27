import {OPEN_INITIATE_REVIEW_MODAL ,CLOSE_INITIATE_REVIEW_MODAL} from './initiateReviewModalTypes'
export const openInitiateReviewModal = () => {
    return {
      type: OPEN_INITIATE_REVIEW_MODAL
    }
  }
  
  export const closeInitiateReviewModal = () => {
    return {
      type: CLOSE_INITIATE_REVIEW_MODAL
    }
  }