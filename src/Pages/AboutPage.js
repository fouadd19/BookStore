import React from 'react';
import Navbar from '../components/Navbar';

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="book-search-container">
          <div className="book-search">
            <h3>
              This application is a Book application using google api book, it
              was created by Fouad Bou Doumit
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
