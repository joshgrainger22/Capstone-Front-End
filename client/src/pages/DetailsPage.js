import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AllLakes from '../components/AllLakes'


const DetailsPage = () => {

  const [detailsPage, setLakeDetails] = useState({})

  let { lakeId } = useParams()

  useEffect(() => {
    let isCancelled = false
    const getLakeDetails = async () => {
      const response = await axios.get(allLakes)
      if (!isCancelled) {
        setLakeDetails(response.data)
      }
    }
    getLakeDetails()
    return () => {
      isCancelled = true
    }
  }, [LakeId])

  return (
   <div>
       <h1> Game Details</h1>
   </div>
  )
}

export default GameDetails