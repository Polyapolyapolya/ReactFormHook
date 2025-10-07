import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Backet from "./Pages/Backet.jsx";
import Description from "./Pages/Description.jsx";
import Main from "./Pages/Main.jsx";
import CustemFeedbackForm from "./CustemFeedbackForm.jsx";


{/* <Backet></Backet>
      <Description></Description>
      <Main></Main> */}
export default function App() {
  return (
    <>
      <div className='d-flex flex-row mb-3 gap-3 bg-dark text-light p-3 user-select-none'>
        <Link className='text-light text-decoration-none' to="/">Главная страница</Link>
        <Link className='text-light text-decoration-none' to="/backet">Корзина</Link>
        <Link className='text-light text-decoration-none' to="/about">О нас</Link>
        <Link className='text-light text-decoration-none' to="/feedback">Обратная связь</Link>
      </div>

      <div className='container'>
        <Routes>
          <Route path='/' element={ <Main></Main> }></Route>
          <Route path='/backet' element={ <Backet></Backet> }></Route>
          <Route path='/about' element={ <Description></Description> }></Route>
          <Route path='/feedback' element={ <CustemFeedbackForm></CustemFeedbackForm> }></Route>
        </Routes>
      </div>
    </>
  )
}
