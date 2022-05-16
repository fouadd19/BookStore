import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Card from '../components/Card';
import { Container, Grid } from '@mui/material';
import './style.css';

const AuthorSearch = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook = (term) => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          '+inauthor:' +
          term +
          '&orderBy=newest&projection=full&maxResults=40&key=AIzaSyAUgS8kR0QcRL_XYgeKiZaH-pehxUs7D-k'
      )
      .then((res) => {
        console.log(res.data.items);
        setData(res.data.items);
      })
      .catch((err) => alert(`Error while searching for the result`));
  };
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="book-search-container">
          <div className="book-search">
            <h2>Find your book</h2>
            <div>
              <input
                type="text"
                placeholder="Enter your author search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  searchBook(e.target.value);
                }}
                onKeyPress={searchBook}
              />
            </div>
          </div>
        </div>

        <div className="section-title">
          <h1>Books</h1>
        </div>

        <div className="row2">
          <Container>
            <Grid container spacing={2}>
              {<Card book={bookData} />}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AuthorSearch;
