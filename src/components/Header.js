import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt='logo of who wants to answer 10 questions'></img>
      <div className="title">Who Wants To Answer 10 Questions?</div>
      <div className="subtitle">Not 8, not 12, but 10 questions! No more, no less.</div>
    </div>
  )
}
