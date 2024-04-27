import {SET_AVAILABILITY_AS_REVIEWER_TRUE , SET_AVAILABILITY_AS_REVIEWER_FALSE} from './reviewStatusToggleTypes'
export const setAvailabilityAsReviewerTrue = () => {
    return {
      type: SET_AVAILABILITY_AS_REVIEWER_TRUE
    }
  }
  
  export const setAvailabilityAsReviewerFalse = () => {
    return {
      type: SET_AVAILABILITY_AS_REVIEWER_FALSE
    }
  }