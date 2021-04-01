import React from 'react';
import GameComponent from 'components/GameComponent';
import styles from './GamePage.module.css';

const GamePage: React.FC = () => {
  return (
    <div className={styles['example-page-grid']}>
      <GameComponent />
    </div>
  );
};

export default GamePage;
