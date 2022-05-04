import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Card from '../components/Card';
import { Container, Grid } from '@mui/material';
import './style.css';

const AuthorSearch = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === 'Enter') {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&key=AIzaSyAUgS8kR0QcRL_XYgeKiZaH-pehxUs7D-k'
        )
        .then((res) => {
          console.log(res.data.items);
          setData(
            res.data.items
              .filter((item) => {
                return (
                  item.accessInfo.epub.isAvailable ||
                  item.accessInfo.pdf.isAvailable
                );
              })
              .sort(function (a, b) {
                return (
                  new Date(b.volumeInfo.publishedDate) -
                  new Date(a.volumeInfo.publishedDate)
                );
              })
          );
        })
        .catch((err) => console.log(err));
    }
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
                onChange={(e) => setSearch(e.target.value)}
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
            <Grid container spacing={1}>
              {<Card book={bookData} />}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AuthorSearch;
