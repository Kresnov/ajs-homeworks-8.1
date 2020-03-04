import Team from '../Team.js';
import Bowman from '../Bowman.js';
import Demon from '../Demon.js';

test('Добавление персонажа', () => {
  const bowman = new Bowman('Alex');
  const team = new Team();
  team.add(bowman);

  const received = team.toArray();
  const expected = [{
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Добавление нескольких персонажей', () => {
  const firstBowman = new Bowman('Alex');
  const secondBowman = new Bowman('John');
  const team = new Team();
  team.addAll(firstBowman, secondBowman);

  const received = team.toArray();
  const expected = [{
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  },
  {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }];

  expect(received).toEqual(expected);
});

test('Дублирующийся персонаж', () => {
  const demon = new Demon('Barry');
  const team = new Team();
  team.add(demon);

  expect(() => {
    team.add(demon);
  }).toThrow();
});
