import Character from './character.js';

export default class demon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Demon';
    this.attack = 10;
    this.defence = 40;
  }
}
