import React from 'react'
import Header from '../components/public/Header'
import LoginForm from '../components/public/LoginForm';
import RegisterDontHave from '../components/public/RegisterDontHave';
import Footer from '../components/public/Footer';


import '../styles/LoginPage.css'

function LoginPage() {



    return (
        <div className='login-page-wrap'>
            <Header loginbtn={false} regbtn={true}/>
            <div className='login-parent-wrap'>
            <div>
            <LoginForm/>
            </div>
            <div>
            <RegisterDontHave/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage
