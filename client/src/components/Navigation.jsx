import React from 'react'
import { Link } from 'react-router-dom'



export default function Navigation() {
  return (
        <nav className = "nav">
            <h1>Lakes Yelp</h1>
            <div className="link-button">
                <Link to="/alllakes"> Lake Feed</Link>
            </div>
        </nav>
  )
}