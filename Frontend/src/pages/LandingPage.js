import React from 'react'
import Footer from '../components/public/Footer'
import Header from '../components/public/Header'
import MainLandingPageHeading from '../components/public/MainLandingPageHeading'
import VideoMonitorAndMainText from '../components/public/VideoMonitorAndMainText'
import TrustedOrganizations from '../components/public/TrustedOrganizations'
import WhosItFor from '../components/public/WhosItFor'
function LandingPage() {
    return (
        <div className="landing-page-wrapper">
            <Header loginbtn={true} regbtn={true}/>
            <MainLandingPageHeading/>
            <VideoMonitorAndMainText/>
            <WhosItFor/>
            <TrustedOrganizations/>
            <Footer/>
        </div>
    )
}

export default LandingPage
