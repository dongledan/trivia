import React from 'react'

export default function Navbar(props) {
  const {setPlayingTrivia} = props;
  return (
    <div className="navbar-container">
      <navbar className="navbar">
        <div className="title">WWTA10Q</div>
        <button className='button exit-btn' onClick={() => setPlayingTrivia(false)}>Exit</button>
      </navbar>
    </div>
  )
}
