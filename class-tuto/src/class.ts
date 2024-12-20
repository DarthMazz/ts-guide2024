class Person {

  static spec = `human`;
  static isAdult() {
    return true;
  }
  constructor(public name: string, protected age: number) {
  }

  greeting(this: Person) {
    console.log(`hello ${this.name}. ${this.age} years old.`);
  }
}

class Teacher extends Person {
  private static instance: Teacher;

  get subject() {
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting(this: Teacher) {
    console.log(`hello ${this.name}. ${this.age} years old.`);
  }

  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher(`Matsu`, 21, "bbb");
    return Teacher.instance;
  }
}

const ma2 = Teacher.getInstance();
console.log(ma2);
console.log(ma2.subject)
ma2.greeting();
console.log(Person.spec);
console.log(Person.isAdult());