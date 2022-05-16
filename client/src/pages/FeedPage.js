import React from 'react'
import AllLakes from '../components/AllLakes'
// import { useParams } from 'react-router-dom'

export default function FeedPage(props) {
    console.log(props.allLakes)
    return (
        <div>
            <div className='card'>
            {props.allLakes.map((allLakes) => {
                return (
                    <AllLakes key={allLakes._id}
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