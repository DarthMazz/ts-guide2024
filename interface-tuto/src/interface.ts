interface Human {
  name: string;
  age?: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greeting(message: string) {
    console.log(`Hello`);
  }
}

const ma2 = new Developer(`Matsu`, 21);

console.log(ma2);
ma2.greeting(`Hello`);