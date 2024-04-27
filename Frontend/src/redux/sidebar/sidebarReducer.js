import {OPEN_SIDEBAR, CLOSE_SIDEBAR} from './sidebarTypes'
  
  const initialState = {
    sidebarCollapsed:true
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_SIDEBAR:
        return {
          sidebarCollapsed: false
        }
      case CLOSE_SIDEBAR:
        return {
          sidebarCollapsed:true
        }
      default: return state
    }
  }
  
  export default reducer
  