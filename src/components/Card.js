import { Grid, Paper, Rating, Typography } from '@mui/material';
import { React, useState } from 'react';
import Modal from './Modal';
import './Card.css';
import { Box } from '@mui/system';

const Card = ({ book }) => {
  // console.log(book);

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <Grid item xs={4} key={item.id}>
                <Paper
                  elevation={3}
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  <img src={thumbnail} alt=" " className="img" />
                  <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h4">
                      {'Title: '}
                      {item.volumeInfo.title}
                    </Typography>

                    <Typography variant="subtitle2" component="h4">
                      {'Publisher: '}
                      {item.volumeInfo.publisher} {'In '}
                      {item.volumeInfo.publishedDate}
                    </Typography>

                    <Typography variant="subtitle2" component="h4">
                      {'Authors: '}
                      {item.volumeInfo.authors}
                    </Typography>
                  </Box>

                  <Box
                    paddingX={1}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                  </Box>
                </Paper>
              </Grid>

              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
