import React from 'react'
import axios from 'axios'

export default function Delete(props) {
console.log(props)
const id = props.id
    const url ='http://localhost:3001/api/getAllComments'
    console.log(id)
    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`${url}/${id}`)
        window.location.reload();
      };


  return (
    <div>
        <button onClick={handleDelete}> Delete </button> 
        </div>
  )
}
