import {OPEN_GET_REVIEW_ALERT ,CLOSE_GET_REVIEW_ALERT} from './GetReviewAlertTypes'

export const openGetReviewAlert = () => {
    return {
      type: OPEN_GET_REVIEW_ALERT
    }
  }
  
  export const closeGetReviewAlert = () => {
    return {
      type: CLOSE_GET_REVIEW_ALERT
    }
  }