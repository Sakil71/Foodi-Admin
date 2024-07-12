import React from 'react';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Leftside from './components/Leftside/Leftside';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>

      <div className='w-[95%] md:w-[90%] lg:w-[90%] mx-auto flex justify-between'>
        <Leftside></Leftside>

        <div className='w-full md:w-[80%] lg:w-[80%] mx-auto px-5'>
          <Routes>
            <Route path="/add" element={<Add url={url}></Add>}></Route>
            <Route path="/list" element={<List url={url}></List>}></Route>
            <Route path="/orders" element={<Orders url={url}></Orders>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;