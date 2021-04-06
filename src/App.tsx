import React, { VoidFunctionComponent } from 'react';
import StoreProvider from 'components/StoreProvider';
import StateRouter from 'components/StateRouter';

import './App.css';
import styles from './App.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  const handleRefresh = (): void => {
    window.location.reload(false);
  };

  return (
    <StoreProvider>
      <div className={styles['mainPage']}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Marvel United Randomizer
            </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleRefresh}
                color="inherit"
              >
                <RefreshIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <main>
          <StateRouter />
        </main>
      </div>
    </StoreProvider>
  );
};

export default App;
