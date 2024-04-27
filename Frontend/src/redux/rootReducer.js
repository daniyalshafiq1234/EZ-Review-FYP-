import { combineReducers } from 'redux'
import userLoginReducer from './user/login/loginReducer'
import userRegisterReducer from './user/register/registerReducer'
import SidebarReducer from './sidebar/sidebarReducer'
import requestReviewModalReducer from './reviewmodal/requestReviewModal/requestReviewModalReducer'
import initiateReviewModalReducer from './reviewmodal/initiateReviewModal/initiateReviewModalReducer'
import reviewStatusToggleReducer from './reviewerStatusToggle/reviewStatusToggleReducer'
import becomeReviewerModalReducer from './reviewmodal/becomeReviewerModal/becomeReviewerModalReducer'
import documentReducer from './documents/documentReducer'
import tokenReducer from './token/tokenReducer'
import orgReducer from './org/OrgReducer'
import GetReviewAlert from './alerts/getreview/GetReviewAlertReducer'
import KanbanCol1NotAssignedReducer from './kanbanboard/static/col1_notAssigned/Reducer'
import KanbanCol2NotStartedReducer from './kanbanboard/static/col2_reviewNotStarted/Reducer'
import KanbanCol3InProgressReducer from './kanbanboard/static/col3_inProgress/Reducer'
import KanbanCol4CompletedReducer from './kanbanboard/static/col4_completed/Reducer'
import KanbanDraggableReviewerDash from './kanbanboard/draggable/Reducer'
const rootReducer = combineReducers({
  loginForm: userLoginReducer,
  regForm: userRegisterReducer,
  sidebar:SidebarReducer,
  requestReviewModal:requestReviewModalReducer,
  initiateReviewModal:initiateReviewModalReducer,
  becomeReviewer:becomeReviewerModalReducer,
  reviewStatusToggle:reviewStatusToggleReducer,
  docsReducer:documentReducer,
  tokenReducer:tokenReducer,
  orgReducer:orgReducer,
  getReviewAlert:GetReviewAlert,
  KanbanCol1NotAssignedReducer:KanbanCol1NotAssignedReducer,
  KanbanCol2NotStartedReducer:KanbanCol2NotStartedReducer,
  KanbanCol3InProgressReducer:KanbanCol3InProgressReducer,
  KanbanCol4CompletedReducer:KanbanCol4CompletedReducer,
  KanbanDraggableReviewerDash:KanbanDraggableReviewerDash
})

export default rootReducer
