import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Update({text}) {
    const url ='http://localhost:3001/api/getAllComments'

  const [comments, setComments] = useState('')
  const [update, setUpdate] = useState(false)

  const updateComments = async (e) => {
      e.preventDefault()
    await axios.put(`${url}/${text}`, {comments}).then((res) => { 
        setComments(res.data.comments)
    })
      window.location.reload(true)
  }
  console.log(comments)
  return (
    <div>
        {update ? (
          <form onSubmit={updateComments}>
            <label>Edit Comment</label>
            <div>
              {/* <input type="text" id={'name'} placeholder={'name'} onChange={(e) => onChange(e)} /> */}
              <textarea
              id='text'
                className="comments-input"
                placeholder="Add your comment here"
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <button>Submit</button>
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