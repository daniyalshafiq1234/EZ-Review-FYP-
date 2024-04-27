import React from 'react'
import Footer from '../components/public/Footer'
import Header from '../components/public/Header'
import FeaturesSideContent from '../components/public/FeaturesSideContent';
import RegisterForm from '../components/public/RegisterForm';
import '../styles/RegisterPage.css'

function RegisterPage() {

    return (
        <div className='reg-page-wrap'>
            <Header loginbtn={true}/>
            <div className='reg-form-and-side-content-wrap'>
            {/* Make this a seperate component*/}
           <RegisterForm/>
           <FeaturesSideContent/>
           </div>
            <Footer/>
        </div>
    )
}

export default RegisterPage
