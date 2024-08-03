import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


import SignIn from './pages/Login';
import SignUp from './pages/SignUp';

import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './pages/Registration';

function App() {
  return (
     <BrowserRouter>
     <Header/>
      <div className="App">
       
              <Routes>
              <Route path="/"  element={ <Home />}/>
               <Route path="/login"  element={ <Login/>}/>
                <Route path="/sign-up"  element={ <SignUp />}/>
                 <Route path="/about"  element={ <About />}/>
                 <Route path="/register"  element={ <Registration/>}/>

               
              </Routes>
       
        </div>
        <Footer/>
         </BrowserRouter>
        
  );
}

export default App;