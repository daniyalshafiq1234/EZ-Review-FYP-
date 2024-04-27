import React, { useEffect } from 'react'
import GetReviewAlertDialog from '../components/public/GetReviewAlertDialog'
import { useSelector,useDispatch } from 'react-redux'
import {getAllOrganizationsNames} from '../redux/org/OrgActions' 
import {getUserNotAssignedDocuments} from '../redux/kanbanboard/static/col1_notAssigned/Actions'
import { getUserReviewNotStartedDocuments } from '../redux/kanbanboard/static/col2_reviewNotStarted/Actions'
import {getUserInProgressDocuments} from '../redux/kanbanboard/static/col3_inProgress/Actions'
import ProfileHeader from '../components/insideProfile/ProfileHeader'
import Sidebar from '../components/insideProfile/Sidebar'
import randomtextpic from '../assets/backgrounds/loginbackground.png' 
import simpleback from '../assets/backgrounds/simpleback.png'
import back2 from '../assets/backgrounds/back2.png'
import back3 from '../assets/backgrounds/back3.png'
// import bulbbackgroundpic from '../assets/backgrounds/bacbulb.png'
import RequestReviewModal from '../components/insideProfile/RequestReviewModal'
import InitiateReviewModel from '../components/insideProfile/InitiateReviewModel'
import '../styles/userdash.css'
import BecomeReviewerModal from '../components/insideProfile/BecomeReviewerModal'
import fonts from '../styles/Fonts.module.css'
import { getUserReviewCompletedDocuments } from '../redux/kanbanboard/static/col4_completed/Actions'
import KanbanStatic from '../components/insideProfile/KanbanBoards/KanbanStatic'
import KanbanDraggable from '../components/insideProfile/KanbanBoards/KanbanDraggable'
function UserDashboard() {

    
    return (
    <div className='user-dash-wrap'>
            <ProfileHeader/>
            <div className='user-dash-sub-wrap'>
            <Sidebar/>

            {/* <KanbanStatic/> */}
            <KanbanDraggable/>
            
            <div className='user-dash-pic-wrap' style={{display:'none'}}>
            <img src={back3} style={{width:'12em',height:'12em'}}/>
            </div>

            <RequestReviewModal/>
            <InitiateReviewModel/>
            <BecomeReviewerModal/>
            <GetReviewAlertDialog/>
            </div>
        </div>
    )
}

export default UserDashboard
