import React from 'react'
import Header from './component/header/Header'
import List from './component/list/List'
import './App.css'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListLink from './component/listLink/ListLink';
import Form from './component/form/Form'
const App = () => {
  const [list,setList]=useState([])
  return (
    <BrowserRouter>
      <Header/>
      <div className='row'>
        <Routes>
          <Route path='/list' element={<ListLink/>} ></Route>
        </Routes>
        <Form setList={setList} list={list}/>
        <List list={list} setList={setList}/>
      </div>
    </BrowserRouter>
  )
}

export default App