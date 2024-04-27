import {OPEN_REQUEST_REVIEW_MODAL ,CLOSE_REQUEST_REVIEW_MODAL} from './requestReviewModalTypes'
export const openRequestReviewModal = () => {
    return {
      type: OPEN_REQUEST_REVIEW_MODAL
    }
  }
  
  export const closeRequestReviewModal = () => {
    return {
      type: CLOSE_REQUEST_REVIEW_MODAL
    }
  }