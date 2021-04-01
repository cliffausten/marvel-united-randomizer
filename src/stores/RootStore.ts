import StateStore from './StateStore';
import ConfigStore from './ConfigStore';
import GameStore from './GameStore';

export default class RootStore {
  stateStore: StateStore;
  configStore: ConfigStore;
  gameStore: GameStore;

  constructor() {
    this.stateStore = new StateStore(this);
    this.configStore = new ConfigStore(this);
    this.gameStore = new GameStore(this);
  }
}

export const createRootStore = (): RootStore => {
  return new RootStore();
};
