import React from 'react'
import TimelineIcon from '@mui/icons-material/Timeline';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import GroupsIcon from '@mui/icons-material/Groups';
import '../../styles/FeaturesSideContent.css'

function FeaturesSideContent() {
    return (
        <div className='side-content-features-wrap'>
            <div className='side-content-features-title'>
            1 step away from better collaboration
            </div>
            <div className='side-content-features-sub-title'>
            <span className='blue-text'>Sign up today for free.</span><br/>
            No obligation or credit card required!
            </div>
            <div className='sub-main-list list-feature-side-content'>
            <ul className='main-points-list'>
                <li className='list-items-main-points feature-side-content-points'><ControlCameraIcon/> Centralized feedback &amp; approvals keep everyone on the same page</li>
                <li className='list-items-main-points feature-side-content-points'><FilePresentIcon/> Accepts all file formats</li>
                <li className='list-items-main-points feature-side-content-points'><TimelineIcon/> Track revisions with integrated task management</li>
                <li className='list-items-main-points feature-side-content-points'><GroupsIcon/> Supports independent &amp; live review sessions</li>
            </ul>
            </div>
            </div>
    )
}

export default FeaturesSideContent
