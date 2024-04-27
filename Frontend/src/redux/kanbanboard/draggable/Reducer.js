import {DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_REQUEST,
DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_SUCCESS,
DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_FAILURE,
DYNAMIC_BOARD_INPROGRESS_DOCS_REQUEST ,
DYNAMIC_BOARD_INPROGRESS_DOCS_SUCCESS ,
DYNAMIC_BOARD_INPROGRESS_DOCS_FAILURE ,
DYNAMIC_BOARD_COMPLETED_DOCS_REQUEST ,
DYNAMIC_BOARD_COMPLETED_DOCS_SUCCESS ,
DYNAMIC_BOARD_COMPLETED_DOCS_FAILURE ,
DYNAMIC_BOARD_STATE_CHANGED} from './Types'


// const itemsFromBackend = [
//     { id: '1', content: "First task" },
//     { id: '2', content: "Second task" },
//     { id: '3', content: "Third task" },
//     { id: '4', content: "Fourth task" },
//     { id: '5', content: "Fifth task" }
// ];

const initialState = {
    loading: false,
    allDocs:{
        'one': {
            name: "Not assigned ",
            items: []
        },
        'two': {
            name: "Review not started ",
            items: []
        },
        'three': {
            name: "Review in progress ",
            items: []
        },
        'four': {
            name: "Review completed ",
            items: []
        }
    },
    error: ''
  }

  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_SUCCESS:
        return {
          ...state,
          loading: false,
          allDocs: {
              ...state.allDocs,
              two:{
                  ...state.allDocs.two,
                  items:action.payload
              }
          }
        }
      case DYNAMIC_BOARD_REVIEWNOTSTARTED_DOCS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }

        case DYNAMIC_BOARD_INPROGRESS_DOCS_REQUEST:
        return {
          ...state,
          loading: true
        }
        case DYNAMIC_BOARD_INPROGRESS_DOCS_SUCCESS:
        return {
          ...state,
          loading: false,
          allDocs: {
              ...state.allDocs,
              three:{
                  ...state.allDocs.three,
                  items:action.payload
              }
          }
        }
        case DYNAMIC_BOARD_INPROGRESS_DOCS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
        case DYNAMIC_BOARD_COMPLETED_DOCS_REQUEST:
            return {
              ...state,
              loading: true
            }
            case DYNAMIC_BOARD_COMPLETED_DOCS_SUCCESS:
            return {
              ...state,
              loading: false,
              allDocs: {
                  ...state.allDocs,
                  four:{
                      ...state.allDocs.four,
                      items:action.payload
                  }
              }
            }
            case DYNAMIC_BOARD_COMPLETED_DOCS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload
            }
            case DYNAMIC_BOARD_STATE_CHANGED:
            return{
              ...state
            }

      default: return state
    }
  }
  
  export default reducer
