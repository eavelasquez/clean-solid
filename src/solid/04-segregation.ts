interface Bird {
  eat(): void;
  fly(): void;
  layEggs(): void;
  run(): void;
}

class Toucan implements Bird {
  constructor() { }

  public eat() { }
  public fly() { }
  public layEggs() { }
  public run() { }
}

class Hummingbird implements Bird {
  constructor() { }

  public eat() { }
  public fly() { }
  public layEggs() { }
  public run() { }
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
}
