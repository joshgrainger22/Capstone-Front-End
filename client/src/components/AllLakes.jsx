import React from 'react'

export default function AllLakes(props) {
  return (

    <div className='image-container'>
        <img src={props.image} id="lake-image"/>
        <div classname ="card">

    <div className='container-grid'>
        <h1> {props.name}</h1>
        <h4> {props.description}</h4>
        <h4> {props.location}</h4>

    </div>
    </div>
    </div>
  )
}
