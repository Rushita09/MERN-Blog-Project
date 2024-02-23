import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute ';
import CreatePost from './pages/CreatePost';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route element= {<PrivateRoute />} >
            <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route> 
        <Route element= {<OnlyAdminPrivateRoute />} >
            <Route path='/create-post' element={<CreatePost/>}></Route>
        </Route> 
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
