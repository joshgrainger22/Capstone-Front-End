import React from 'react'

export default function Lakes(props) {
  return (

    <div className='image-container'>
        <img src={props.image} id="lake-image"/>
        <div classname ="card">

    <div className='container-grid'>
        <h1> {props.name}</h1>

    </div>
    </div>
    </div>
  )
}
