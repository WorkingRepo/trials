import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>ADMIN UI</h1>
        <ul role="nav">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/delete">Delete</Link></li>
          <li><Link to="/update">Update</Link></li>

        </ul>
      </div>
    )
  }
})
