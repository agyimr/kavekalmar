import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Kövesd a{' '}
      <a href="https://www.facebook.com/kronikas.kave.9">@kavekronikas</a>
      -t!
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          Kávékrónikás - {new Date().getFullYear()} - Minden jog fenntartva.
        </span>
      </div>
    </footer>
  </div>
)
