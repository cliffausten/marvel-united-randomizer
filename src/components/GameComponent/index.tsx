import React, { useEffect } from 'react';
import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';

import styles from './GameComponent.module.css';

const GameComponent = observer(() => {
  const { gameStore } = useStores();

  useEffect(() => {
    gameStore.createRandomGame();
  }, []);

  const heroes = gameStore.heroes?.map((hero, index) => {
    return (
      <div key={index}>
        <img
          className={styles['image']}
          src={`../img/${hero.image}.jpeg`}
        ></img>
      </div>
    );
  });

  return (
    <div className={styles['example-component']}>
      <div className={styles['heroGrid']}>{heroes}</div>
      <div>vs</div>
      <div>
        {gameStore.villain && (
          <img
            className={styles['image']}
            src={`../img/${gameStore.villain.image}.jpeg`}
          ></img>
        )}
      </div>
    </div>
  );
});

export default GameComponent;
