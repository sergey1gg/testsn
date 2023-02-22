import { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import { getAuthUserData } from './redux/auth-reducer';

class App extends Component {
  
componentDidMount(){
  this.props.initializeApp()
}
render(){
  if(!this.props.initialized){
  return <Preloader/>
  }
  const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));

  return (
    <BrowserRouter>
    <div className='main'>
      <div className='app-wrapper'>
        <HeaderContainer />
        <main>
       
        <div className='app-wrapper-content'>
        <Suspense fallback={<Preloader />}>
          <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
	        <Route path='/profile' element={<ProfileContainer />} />
          
            <Route path='/dialogs/*' element={<DialogsContainer/>} />
            <Route path='/users/' element={<UsersContainer/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
          </Suspense>

        </div>

        </main>
        <Navbar/>
      </div>
      </div>
    </BrowserRouter>
  )
}
};
const mapStateToProps =(state) =>{
  return {
  initialized: state.app.initialized
}}
export default connect( mapStateToProps, {initializeApp} )( App );
