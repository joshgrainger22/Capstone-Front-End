import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function LakeDetails(props) {
    
    const [selectedLake, setLake ] = useState('')

   
    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        let selectedLake = props.allLakes.find(
            (allLakes) => allLakes._id === (id)
        )
        setLake(selectedLake)
    },[props.allLakes, id])

  return selectedLake ? (
    <div className='details-container'>
        <div className='details-image'>
            <img className='image-container' src={selectedLake.image} alt={selectedLake.name} />
        </div>
        <div className='details-content'>
            <h1 id='lake-name'>// {selectedLake.name}</h1>
            <div className='stats'>
                <h4 className='lake-details'>Name: {selectedLake.name}</h4>
                <h4 className='lake-details'>Description: {selectedLake.description}</h4>
                <h4 className='lake-details'>Location: {selectedLake.location}</h4>
            </div>
        </div>
        
    </div>
  ) : <div>Loading</div>
  
  }

export default LakeDetails