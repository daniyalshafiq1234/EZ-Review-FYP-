import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getUserNotAssignedDocuments} from '../../../redux/kanbanboard/static/col1_notAssigned/Actions'
import { getUserReviewNotStartedDocuments } from '../../../redux/kanbanboard/static/col2_reviewNotStarted/Actions'
import {getUserInProgressDocuments} from '../../../redux/kanbanboard/static/col3_inProgress/Actions'
import fonts from '../../../styles/Fonts.module.css'
import { getUserReviewCompletedDocuments } from '../../../redux/kanbanboard/static/col4_completed/Actions'



function KanbanStatic() {
    const col1Docs = useSelector(state => state.KanbanCol1NotAssignedReducer)
    const col2Docs = useSelector(state => state.KanbanCol2NotStartedReducer)
    const col3Docs = useSelector(state => state.KanbanCol3InProgressReducer)
    const col4Docs = useSelector(state => state.KanbanCol4CompletedReducer)
    
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserNotAssignedDocuments())

        dispatch(getUserReviewNotStartedDocuments())
        //alag alag useEffect bnalo?     
        dispatch(getUserInProgressDocuments())

        dispatch(getUserReviewCompletedDocuments())
       
    },[])
    
    //function to convertdate
    Date.prototype.toShortFormat = function() {

        let monthNames =["Jan","Feb","Mar","Apr",
                          "May","Jun","Jul","Aug",
                          "Sep", "Oct","Nov","Dec"];   
                             
        let day = this.getDate();
        let monthIndex = this.getMonth();

        let monthName = monthNames[monthIndex];

        let year = this.getFullYear();
        
        return `${day}-${monthName}-${year}`;  
    }
    return (<div className='authorDashKanbanBoardWrap' style={{width:'100%'}}>
            <div className='kanbanCol1'>
                <div className='kanbanColHeading'>
                   <span className={fonts.kanbanColHeadingFont}>Not assigned <span style={{marginLeft:'0.5em'}}>{col1Docs.notAssignedDocs.length}</span></span>
                </div>
                {col1Docs.notAssignedDocs.map((item)=>{
                    return(
                    <div className='kanbanCard'>
                    <div className='kanbanCardTitle'>
                        {item.document_title}
                    </div>
                    <div  className='kanbanCardId'>
                    ID : {item.document_id}
                    </div>
                    <div  className='kanbanCardId'>
                    Submitted on : {new Date(item.submitted_at).toShortFormat()}
                    </div>
                    
                    </div>
                    )
                })}
            </div>
            <div className='kanbanCol2'>
            <div className='kanbanColHeading'>
                   <span className={fonts.kanbanColHeadingFont}>Review not started <span style={{marginLeft:'0.5em'}}>{col2Docs.reviewNotStartedDocs.length}</span></span>
                </div>
                {col2Docs.reviewNotStartedDocs.map((item)=>{ 
                    return(
                    <div className='kanbanCard'>
                    <div className='kanbanCardTitle'>
                        {item.document_title}
                    </div>
                    <div  className='kanbanCardId'>
                        ID : {item.document_id}
                    </div>
                    </div>
                    )
                })}
            </div>
            <div className='kanbanCol3'>
            <div className='kanbanColHeading'>
                   <span className={fonts.kanbanColHeadingFont}>Review in progress <span style={{marginLeft:'0.5em'}}>{col3Docs.inProgressDocs.length}</span></span>
                </div>
                {col3Docs.inProgressDocs.map((item)=>{ 
                    return(
                    <div className='kanbanCard'>
                    <div className='kanbanCardTitle'>
                        {item.document_title}
                    </div>
                    <div  className='kanbanCardId'>
                       {item.document_id}
                    </div>
                    </div>
                    )
                })}
            </div>
            <div className='kanbanCol4'>
            <div className='kanbanColHeading'>
                   <span className={fonts.kanbanColHeadingFont}>Review completed <span style={{marginLeft:'0.5em'}}>{col4Docs.completedDocs.length}</span></span>
                </div>
                {col4Docs.completedDocs.map((item)=>{ 
                    return(
                    <div className='kanbanCard'>
                    <div className='kanbanCardTitle'>
                        {item.document_title}
                    </div>
                    <div  className='kanbanCardId'>
                        {item.document_id}
                    </div>
                    </div>
                    )
                })}
            </div>
            </div>
    )
}

export default KanbanStatic