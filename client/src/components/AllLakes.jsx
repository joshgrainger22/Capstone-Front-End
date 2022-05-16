import React from 'react'

export default function AllLakes(props) {
  return (
    <div className='container-grid'>
    {/* <div className="card game-card">
    <div className="img-wrapper"> */}
      <img src={props.image} alt="Lake" />

      <div className="container-grid">
        {/* <h1> {props.name}</h1>
        <h3> {props.description}</h3>
        <h3> {props.location}</h3> */}
    </div>
    </div>
    // </div>
    // </div>
  )
}
