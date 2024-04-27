import React from 'react'
import Footer from '../components/public/Footer'
import Header from '../components/public/Header'
import FeaturesSideContent from '../components/public/FeaturesSideContent';
import RegisterOrganizationForm from '../components/public/RegisterOrganizationForm';
import '../styles/RegisterPage.css'

function RegisterOrganizationPage() {

    return (
        <div className='reg-page-wrap'>
            <Header loginbtn={false} regbtn={false} btdash={true}/>
            <div className='reg-form-and-side-content-wrap'>
           <RegisterOrganizationForm/>
           <FeaturesSideContent/>
           </div>
            <Footer/>
        </div>
    )
}

export default RegisterOrganizationPage
