import React from 'react'
import Footer from '../components/public/Footer'
import Header from '../components/public/Header'
import FeaturesSideContent from '../components/public/FeaturesSideContent';
import RegisterReviewerForm from '../components/public/RegisterReviewerForm';
import '../styles/RegisterPage.css'


function BecomeReviewerPage() {

    return (
        <div className='reg-page-wrap'>
            <Header loginbtn={false} regbtn={false} btdash={true}/>
            <div className='reg-form-and-side-content-wrap'>
           <RegisterReviewerForm/>
           <FeaturesSideContent/>
           </div>
            <Footer/>
        </div>
    )
}

export default BecomeReviewerPage
