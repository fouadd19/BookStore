import React from 'react';
import LoginHooks from '../Login/LoginHook';
import './style.css';

function Landing() {
  return (
    <div className="landing background-image">
      <div>
        <div className="centered">
          <h1 className="book-2row">THE BOOKS CLUB !</h1>
          <h3>A place where you can read and search for any book</h3>
          <LoginHooks />
        </div>
      </div>
    </div>
  );
}

export default Landing;
