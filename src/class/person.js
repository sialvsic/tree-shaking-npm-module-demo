class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = function() {
    return this.name;
  };

  getAge = function() {
    return this.age;
  }
}

export function createPerson(name, age) {
  return new Person(name, age);
}
