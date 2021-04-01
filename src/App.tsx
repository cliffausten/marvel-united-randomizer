import React from 'react';
import StoreProvider from 'components/StoreProvider';
import StateRouter from 'components/StateRouter';

// Add the global Coop Digital Styles
import '@coopdigital/css-foundations/dist/foundations.css';

import './App.css';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className={styles['mainPage']}>
        <header className={styles['header']}>
          <div />
          <div>Marvel United Randomizer</div>
        </header>
        <main>
          <StateRouter />
        </main>
      </div>
    </StoreProvider>
  );
};

export default App;
