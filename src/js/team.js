export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Выбранный персонаж уже есть в команде!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    if (Array.isArray(characters) && characters.length === 0) {
      throw new Error('В качестве аргумента функции должен быть передан массив!');
    }
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const { members } = this;
    let current = 0;
    const last = members.size;
    return {
      next() {
        if (current < last) {
          const prop = Array.from(members)[current];
          current += 1;
          return {
            done: false,
            value: prop,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
