import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Delete from '../components/Delete' 
import Update from './Update'

const Comment = (props) => {
  console.log(props)
  const url ='http://localhost:3001/api/createComment'
  //const navigate = useNavigate()
  //const [name, setName] = useState('')
  const [posts, setPosts] = useState('')
  const [create, setCreate] = useState(false)
  const [data, setData] = useState({ name: '', text: ''})


  const createComments = async () => {
    const res = await axios.post(url,{name: data.name, text: data.text})
     console.log(res)
  }
  function onChange(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  
  return (
    <div>
      <h2>Comments:</h2>
      {props.allComments.map((comments) => {
        return (
          <div>
        <p> name:{comments.name} </p>
        <p> text:{comments.text}</p>
        <Delete id={comments._id}/>
        <Update text={comments.text}/>
      </div> 
        )})}

      <div>
        {create ? (
          <form onSubmit={createComments}>
            <label>New Comment</label>
            <div>
              <input type="text" id={'name'} placeholder={'name'} onChange={(e) => onChange(e)} />
              <textarea
              id='text'
                className="comments-input"
                placeholder="Add your comment here"
                value={data.text}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button>Submit</button>
          </form>
        ) : (
          <button
            type="submit"
            className="review-button"
            onClick={() => setCreate(true)}
          >
            Create a Comment
          </button>
        )}
      </div>
    </div>
  )
}

export default Comment