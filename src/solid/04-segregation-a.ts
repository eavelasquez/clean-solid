// ❌ Without Interface Segregation Principle: this example demonstrates
// that classes are required to implement all interface methods, when not
// all classes make use of those methods.

interface Bird {
  eat(): void;
  fly(): void;
  layEggs(): void;
  run(): void;
  swim(): void;
}

class Toucan implements Bird {
  constructor() { }

  public eat() { }
  public fly() { }
  public layEggs() { }
  public run() { }
  public swim(): void {
    throw new Error('Cannot swim!');
  }
}

class Hummingbird implements Bird {
  constructor() { }

  public eat() { }
  public fly() { }
  public layEggs() { }
  public run() { }
  public swim(): void {
    throw new Error('Cannot swim!');
  }
}

// this class is obligated to implement all the methods of the interface
// but the Ostrich cannot fly
class Ostrich implements Bird {
  constructor() { }

  public eat() { }
  public fly() {
    throw new Error('Cannot fly!');
  }
  public layEggs() { }
  public run() { }
  public swim(): void {
    throw new Error('Cannot swim!');
  }
}

class Penguin implements Bird {
  constructor() { }

  public eat() { }
  public fly() {
    throw new Error('Cannot fly!');
  }
  public layEggs() { }
  public run() { }
  public swim() { }
}
