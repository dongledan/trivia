import React from 'react'

export default function Navbar(props) {
  const {setPlayingTrivia} = props;
  return (
    <div className="navbar-container">
      <navbar className="navbar">
        <a className="title" href='https://dannyboy.dev/' rel='noopener noreferrer' target='_blank'>WWTA10Q</a>
        <button className='button exit-btn' onClick={() => setPlayingTrivia(false)}>Exit</button>
      </navbar>
    </div>
  )
}
