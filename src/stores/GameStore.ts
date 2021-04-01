import { decorate, observable } from 'mobx';
import Store from './Store';
import RootStore from './RootStore';
import { Hero, Villain } from 'types/hero';

class GameStore extends Store {
  heroes: Array<Hero>;
  villain: Villain;

  constructor(rootStore: RootStore) {
    super(rootStore);
  }

  createRandomGame(): void {
    const shuffledHeroes = this.shuffle(this.rootStore.configStore.heroes);

    this.heroes = [
      shuffledHeroes[0],
      shuffledHeroes[1],
      shuffledHeroes[2],
      shuffledHeroes[3]
    ];

    this.villain = this.rootStore.configStore.villains[
      Math.floor(Math.random() * this.rootStore.configStore.villains.length)
    ];
  }

  shuffle(orginalarray: Array<Hero>): Array<Hero> {
    const array = orginalarray.slice(0, orginalarray.length);

    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

decorate(GameStore, {
  heroes: observable,
  villain: observable
});

export default GameStore;
