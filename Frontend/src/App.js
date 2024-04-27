import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './pages/UserDashboard';
import RegisterOrganizationPage from './pages/RegisterOrganizationPage';
import BecomeReviewerPage from './pages/BecomeReviewerPage';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
     <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/userlogin" element={<LoginPage/>}/>
          <Route path="/userregistraion" element={<RegisterPage/>}/>
          <Route path="/orgregistraion" element={<RegisterOrganizationPage/>}/>
          <Route path="/reviewerregistraion" element={<BecomeReviewerPage/>}/>
          <Route path="/userdashboard" element={<UserDashboard/>}/>
     </Routes>
    
    </div>
    </Provider>
  );
}

export default App;
