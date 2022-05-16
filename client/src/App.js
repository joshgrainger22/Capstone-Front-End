import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './styles/App.css'
import axios from 'axios'
import Header from './components/Header'
import Comment from './components/Comment'
import FeedPage from './pages/FeedPage'

const BASE_URL = 'http://localhost:3001/api'


export default function App() {
  const [allLakes, setAllLakes] = useState([])
  const [allComments, setAllComments] = useState([])

  const getAllLakes = async () => {
    const result = await axios.get(`${BASE_URL}/lakes`)
    console.log(result.data.alllakes)
    setAllLakes(result.data.allLakes)
  }

  const getAllComments = async () => {
    const result = await axios.get(`${BASE_URL}/getAllComments`)
    console.log(result.data.comments)
    setAllComments(result.data.comments)
  }

  useEffect( () => {
    getAllLakes()
    getAllComments()
}, [])

return (
    <div>
    <header className='App-Header'>Header</header>
    <Header/>
  <div className='App'>
    <main>
      <div>
        <Comment allComments={allComments} />
        <Routes>
          <Route index element={<FeedPage />} />
          <Route exact path ="/lakes" element={<FeedPage allLakes={allLakes}/>}/>
        </Routes>
      </div>
    </main>
  </div>
  </div>
)

}

