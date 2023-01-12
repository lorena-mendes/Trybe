// class Superclass {
//   public isSuper: boolean;

//   constructor() {
//     this.isSuper = true;    
//   }

//   public sayHello(): void {
//     console.log('Olá mundo!');    
//   }
// }

// class Subclass extends Superclass {
//   constructor() {
//     super();
//     this.isSuper = false;
//   }
// }

// const myFunc = (object: Superclass) => {
//   object.sayHello();
//   console.log(object.isSuper ? 'Super!' : 'Sub!');
  
// }

// const sup = new Superclass();
// const sub = new Subclass();

// myFunc(sup);
// myFunc(sub);

interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const object = new MyClass(2);
console.log(object.myNumber);
console.log(object.myFunc(4));

