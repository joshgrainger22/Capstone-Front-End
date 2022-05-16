import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'React'
import './styles/App.css'
import axios from 'axios'
import Navigation from './components/Navigation'
import Comment from './components/Comment'
import LakesPage from './pages/LakesPage'

const BASE_URL = 'http://localhost:3001/api'

export default function App() {
  const [allLakes, setAllLakes] = useState([])
  const [allComments, setAllComments] = useState([])

  const getAllLakes = async () => {
    const result = await axios.get(`${BASE_URL}/lakes`)
    console.log(result.data.lakes)
    setAllLakes(result.data.allLakes)
  }

  useEffect( () => {
    getAllLakes()
}, [])

}
