import React from 'react';
import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';

import GamePage from 'pages/GamePage';

export const StateRouter = observer(() => {
  const { stateStore } = useStores();

  let output = null;
  switch (stateStore.state) {
    case 'initial':
      output = <GamePage />;
      break;
  }
  return output;
});

export default StateRouter;
