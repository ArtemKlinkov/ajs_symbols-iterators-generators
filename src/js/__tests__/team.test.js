import Team from '../team';
import Bowman from '../bowman';

test('should throw error "Выбранный персонаж уже есть в команде!" for adding duplicate chatacter', () => {
  const bowmanVasiliy = new Bowman('Василий');
  const newTeam = new Team();
  newTeam.add(bowmanVasiliy);
  expect(() => { newTeam.add(bowmanVasiliy); }).toThrow('Выбранный персонаж уже есть в команде!');
});

test('should throw error "В качестве аргумента функции должен быть передан массив!" for non-array parameter', () => {
  const newTeam = new Team();
  expect(() => { newTeam.addAll(); }).toThrow('В качестве аргумента функции должен быть передан массив!');
});

test('should add array of chatacters to team', () => {
  const bowman1 = new Bowman('Василий');
  const bowman2 = new Bowman('Иван');
  const bowman3 = new Bowman('Аркадий');
  const bowman4 = new Bowman('Гоша');

  const newTeam = new Team();
  newTeam.addAll(bowman1, bowman2, bowman3, bowman4, bowman2);

  const expectedTeam = new Team();
  expectedTeam.add(bowman1);
  expectedTeam.add(bowman2);
  expectedTeam.add(bowman3);
  expectedTeam.add(bowman4);

  expect(newTeam).toEqual(expectedTeam);
});

test('should return array of chatacters from set', () => {
  const bowman1 = new Bowman('Василий');
  const bowman2 = new Bowman('Иван');
  const bowman3 = new Bowman('Аркадий');
  const bowman4 = new Bowman('Гоша');

  const newTeam = new Team();
  newTeam.addAll(bowman1, bowman2, bowman3, bowman4, bowman2);
  const returnedArray = newTeam.toArray();
  const expectedArray = [bowman1, bowman2, bowman3, bowman4];

  expect(returnedArray).toEqual(expectedArray);
});

test('should add array of chatacters to team', () => {
  const bowman1 = new Bowman('Василий');
  const bowman2 = new Bowman('Иван');
  const bowman3 = new Bowman('Аркадий');
  const bowman4 = new Bowman('Гоша');

  const newTeam = new Team();
  newTeam.addAll(bowman1, bowman2, bowman3, bowman4, bowman2);

  const expectedTeam = new Team();
  expectedTeam.add(bowman1);
  expectedTeam.add(bowman2);
  expectedTeam.add(bowman3);
  expectedTeam.add(bowman4);

  expect(newTeam).toEqual(expectedTeam);
});

test('Обход итерируемого объекта', () => {
  const bowman1 = new Bowman('Василий');
  const bowman2 = new Bowman('Иван');
  const bowman3 = new Bowman('Аркадий');
  const bowman4 = new Bowman('Гоша');

  const characters = {
    bowman1,
    bowman2,
    bowman3,
    bowman4,
  };

  const newTeam = new Team();
  newTeam.addAll(bowman1, bowman2, bowman3, bowman4, bowman2);

  let i = 1;
  for (const character of newTeam) {
    expect(character).toEqual(characters[`bowman${i}`]);
    i += 1;
  }
});
