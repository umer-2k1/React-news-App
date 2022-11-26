import React, { Component } from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        {/* <img  className='logo' src="/images/eLogo.png" alt="logo" /> */}
 
 <div className="navbar">
<h2 id='my' >Crazy News</h2>
<Link to="/">Home</Link>
<Link to="/general">General</Link>
<Link to="/entertainment">Entertainment</Link>
<Link to="/business">Business</Link>
<Link to="/health">Health</Link>
<Link to="/science">Science</Link>
<Link to="/sports">Sports</Link>
<Link to="/technology">Technology</Link>



 </div> 



      </>
    )
  }
}
