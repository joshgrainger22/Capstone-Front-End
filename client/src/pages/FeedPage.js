import React from 'react'
import Lakes from '../components/Lakes'
import { useParams } from 'react-router-dom'

export default function FeedPage(props) {
    console.log(props.allLakes)
    return (
        <div>
            <div className='card'>
            {props.allLakes.map((allLakes) => {
                return(
                    <Lakes key={allLakes._id}
                    name={allLakes.name}
                    description={allLakes.description}
                    location={allLakes.location}
                    image={allLakes.image}
                    />
                )
            })}
            </div>
        </div>
    )
}