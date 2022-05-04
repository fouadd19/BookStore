import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
  const [value, setValue] = useState();
  let navigate = useNavigate();
  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 25%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 75%)',
      }}
    >
      <Toolbar>
        <Grid sx={{ placeItems: 'center' }} container>
          <Grid item xs={2}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab label="Home" onClick={() => navigate('/authorsearch')} />
              <Tab label="About" onClick={() => navigate('/about')} />
            </Tabs>
          </Grid>

          <Grid item xs={1} />

          <Grid item xs={3}>
            <Typography display="flex">
              <a href="https://www.twitter.com">
                <TwitterIcon
                  sx={{ marginLeft: 'auto', color: 'white' }}
                  variant="contained"
                />
              </a>

              <a href="https://www.linkedin.com">
                <LinkedInIcon
                  sx={{ marginLeft: 1, color: 'white' }}
                  variant="contained"
                />
              </a>

              <a href="https://www.facebook.com">
                <FacebookIcon
                  sx={{ marginLeft: 1, color: 'white' }}
                  variant="contained"
                />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
