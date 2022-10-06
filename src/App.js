import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Main from './components/Main';
import Signin from './components/Signin';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/main' element={<Main/>} />
      </Routes>
    </>
  );
}

export default App;