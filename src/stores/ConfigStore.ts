import { decorate, observable } from 'mobx';
import Store from './Store';
import RootStore from './RootStore';
import { Hero, Villain } from 'types/hero';

class ConfigStore extends Store {
  heroes: Array<Hero> = [
    {
      name: 'Spider-man',
      image: 'f9bb2d508dcb1d007af9b7e801f290f4_original'
    },
    {
      name: 'Ghost-spider',
      image: '5126f56494f598017dd97d10341a69fc_original'
    },
    {
      name: 'Miles Morales',
      image: 'ea88acf14bddfc41f8643a4a0c54ca3d_original'
    },
    {
      name: 'Spider-ham',
      image: 'b252fb90ac582f90df40db35940ac945_original'
    },
    {
      name: 'Winter Soldier',
      image: '7dc5f010f94c7d3bb3df9f3e555c65cf_original'
    },
    {
      name: 'Shuri',
      image: '88b76223d54a8bbb2b8e26c961f492db_original'
    },
    {
      name: 'Black Panther',
      image: 'ec3fb736498d0df100197307bb7a9448_original'
    },
    {
      name: 'Hulk',
      image: '2b3ebd763ac245911dbde5b529473bd9_original'
    },
    {
      name: 'Iron man',
      image: '875c8ab778fff4352b9ade4997fda2b1_original'
    },
    {
      name: 'Black Widow',
      image: 'a9efec59fbf33e56f0daa29dbd3b577c_original'
    },
    {
      name: 'Captain Marvel',
      image: 'd2425fbb128225cd9b022ea76f05788f_original'
    },
    {
      name: 'Captain America',
      image: 'ea4058f910ef90ceb5fd296df12742be_original'
    },
    {
      name: 'Iron Fist',
      image: 'd806b6f30ca4502bf1b37feca6e876c7_original'
    },
    {
      name: 'Mocking Bird',
      image: '292bece4bd82184fc29b203672c00703_original'
    },
    {
      name: 'Luke Cage',
      image: 'fec390a3ade7628b9471168865d8c7a5_original'
    },
    {
      name: 'Moon Knight',
      image: 'ebb9c5d6e2d5776c687bd5f86f0b936e_original'
    },
    { name: 'Black Cat', image: '8cad76623b0aae06715f55a8d55e4894_original' },
    {
      name: 'War Machine',
      image: '08c693a6c4310611fb2392e4c96a3ac3_original'
    },
    { name: 'Ms Marvel', image: '49c7b436560f25ba503a512c7a4d0071_original' },
    { name: 'Shang Chi', image: '585536a38e562f13a8331e8c2907691f_original' },
    { name: 'Blade', image: '07af304c30308a0999bf8fa62c528f3c_original' },
    { name: 'Ant Man', image: '2dfbc019f9b97bbf3dcffbabcaf818a6_original' },
    { name: 'Wasp', image: 'f85420c77bd0ad0985fefb43a3390e0f_original' },
    {
      name: 'Jessica Jones',
      image: '2f443f655ddf7c35003b5fe1975c607f_original'
    },
    { name: 'Venom', image: 'fa4915da817eb5a40dab3f65e39c9fa1_original' },
    {
      name: 'Drax the Destroyer',
      image: '7b3a5d987013167e43a10b779dde0533_original'
    },
    { name: 'She-hulk', image: '3dc3e7a6ad2a4f814a7d5b352aa15f23_original' },
    { name: 'Ghost Rider', image: 'e9f5d4e4af269cdab28e7ed48cafa5d9_original' },
    {
      name: 'Howard the Duck',
      image: 'f368aff92803414abaa8970f1a9fd2c2_original'
    },
    { name: 'Mantis', image: '01e7a734151ebb9c3cd91ea26135296a_original' },
    { name: 'Okoye', image: '3cbf331663081a3e2d6af5f40f792739_original' },
    { name: 'Falcon', image: '09815061ee76e677b0dcfc043c583d90_original' },
    { name: 'Vision', image: 'ee4431882ddcf56642f2f96dee35ed5e_original' },
    { name: 'Nova', image: '2320a1b5689a7521a0c4c6f4071f8b7d_original' },
    {
      name: 'Scarlet Witch',
      image: 'e37d7a7b299cee9ab166d05985287f82_original'
    },
    { name: 'Elecktra', image: 'f3f3c4fe93b27dee0f924f9c19786ff0_original' },
    { name: 'Daredevil', image: 'aba12a29e5ab3c19bb0ee655536894ff_original' },
    {
      name: 'America Chavez',
      image: 'd29cafdfd5a58e58c8f1e6c9c60e7f71_original'
    },
    {
      name: 'Spider-man 2099',
      image: '1d6ecf733d9fedee9a3e40d678bf342d_original'
    },
    {
      name: 'Squirrel Girl',
      image: '331493d8782186443adff2165ce2f9a5_original'
    },
    {
      name: 'Doctor Strange',
      image: '79fe6754386218b2661b36c2684fb77f_original'
    },
    {
      name: 'Punisher',
      image: '024d780c1cfb72ad66cd8b72150b7976_original'
    },
    {
      name: 'Spider-woman',
      image: '6d95b1ff8414504c2cb23215bb97031d_original'
    },
    { name: 'Quicksilver', image: '9f9128d390f8b12ea04e50dc5b59a819_original' },
    { name: 'Nebula', image: 'aa194834f0f9376a9414a0be4dcfc340_original' },
    { name: 'Yondu', image: 'ae7bdbad9c714238057c8c16cb71e4f2_original' }
  ];
  villains: Array<Villain> = [
    {
      name: 'Green Goblin',
      image: '08ac149899c76d32dc4e5ac2dd8f8595_original'
    },
    {
      name: 'Killmonger',
      image: 'e64ba4087493fa0ee547266bde3c90c3_original'
    },
    {
      name: 'Red Skull',
      image: '17d3bcd34da74af223eaee85b87987f3_original'
    },
    {
      name: 'M.O.D.O.K',
      image: '243a3142906367907fdc5ceeec158ccf_original'
    },
    {
      name: 'Taskmaster',
      image: '985a0d266e4a6631a1d1fa0ca0eb7e3b_original'
    },
    {
      name: 'Ultron',
      image: 'cf2565289b6aa5e8ca600677a510298a_original'
    },
    {
      name: 'Kraven',
      image: 'b6df5c58afed30233add31c3007ddee9_original'
    },
    {
      name: 'Sandman',
      image: 'b7ce2c060542b5cd8c49ba1e14f343e7_original'
    },
    {
      name: 'Mysterio',
      image: 'bf99d23281b909b54297304fe3ed3e8f_original'
    },
    {
      name: 'Electro',
      image: 'e8aabcb6727a778c723e850481b9db4d_original'
    },
    {
      name: 'Doctor Octopus',
      image: 'f18bc6986758f454ec84e4a05dfe6e3b_original'
    },
    {
      name: 'Vulture',
      image: 'fa4a5e415d8c7fd9d42d0fe076e72848_original'
    },
    {
      name: 'Thanos',
      image: '0cf33693c775b6d6b64d16902d75f199_original'
    },
    {
      name: 'Ebony Maw',
      image: '0cf33693c775b6d6b64d16902d75f199_original'
    },
    {
      name: 'Black Dwarf',
      image: '5ab4f8e74428e36a76fc07ca8cf908f1_original'
    },
    {
      name: 'Proxima Midnight',
      image: '77437dd50be70d038170acd8d3d9eb5e_original'
    },
    {
      name: 'Bullseye',
      image: '0854d578b0e81a7abb772b3a0fb388ab_original'
    },
    { name: 'Carnage', image: '7304f2622a0f927ba36dca39566893e1_original' },
    { name: 'Hela', image: 'b0d6c2e035127473653d45d8fe056961_original' },
    { name: 'Kingpin', image: '97058751205dcacfb73740efc2733271_original' },
    { name: 'Baron Zemo', image: '665fee9378b63cb1fa3e5ff7391427df_original' },
    { name: 'Dormammu', image: '762411db60d99400724ea8ec9786b9d3_original' },
    { name: 'Rhino', image: '515cce802d299f9337e5bf00e5f91a3c_original' },
    { name: 'Venom', image: '27e96849dfa8ac7c11631bd1158408f7_original' },
    { name: 'Kang', image: 'f9cdf206851a25b0f016716ac14772fb_original' }
  ];

  constructor(rootStore: RootStore) {
    super(rootStore);
  }
}

decorate(ConfigStore, {
  heroes: observable,
  villains: observable
});

export default ConfigStore;
