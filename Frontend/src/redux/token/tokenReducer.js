import {SAVE_TOKEN} from './tokenTypes'
  const initialState = {
    token:''
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_TOKEN:
        return {
          token: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  