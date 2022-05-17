import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Update({text, id}) {
    const url ='http://localhost:3001/api/getAllComments/edit'

  const [comments, setComments] = useState({text: ''})
  const [update, setUpdate] = useState(false)

  const updateComments = async (e) => {
      e.preventDefault()
      console.log("edited comment", comments)
      // const payload = {
      //   text: comments 
      // }
    //   console.log(comments)
    //   console.log(id)
    const res = await axios.put(`${url}/${id}`, comments) 
    console.log(res)
    //     setComments(res.data.comments)
    // })
      window.location.reload(true)
  }
  return (
    <div>
        {update ? (
          <form onSubmit={(e) => updateComments(e)}>
            <label>Edit Comment</label>
            <div>
              <textarea
              name='text'
                className="comments-input"
                placeholder="Add your comment here"
                onChange={(e) => setComments({...comments, [e.target.name]:e.target.value})}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <button
            type="submit"
            className="review-button"
            onClick={() => setUpdate(true)}
          > 
            Update
          </button>
        )}

        </div>
  )
}