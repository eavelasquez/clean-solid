// ❌ Without Interface Segregation Principle: this example demonstrates
// that classes are required to implement all interface methods, when not
// all classes make use of those methods.

export interface Bird {
  eat(): void;
  fly(): void;
  layEggs(): void;
  run(): void;
  swim(): void;
}

export class Toucan implements Bird {
  constructor() { }

  eat(): void { }
  fly(): void { }
  layEggs(): void { }
  run(): void {
    throw new Error('Cannot run!');
  }
  swim(): void {
    throw new Error('Cannot swim!');
  }
}

export class Hummingbird implements Bird {
  constructor() { }

  eat(): void { }
  fly(): void { }
  layEggs(): void { }
  run(): void {
    throw new Error('Cannot run!');
  }
  swim(): void {
    throw new Error('Cannot swim!');
  }
}

// this class is obligated to implement all the methods of the interface
// but the Ostrich cannot fly
export class Ostrich implements Bird {
  constructor() { }

  eat(): void { }
  fly(): void {
    throw new Error('Cannot fly!');
  }
  layEggs(): void { }
  run(): void { }
  swim(): void {
    throw new Error('Cannot swim!');
  }
}

export class Penguin implements Bird {
  constructor() { }

  eat(): void { }
  fly(): void {
    throw new Error('Cannot fly!');
  }
  layEggs(): void { }
  run(): void {
    throw new Error('Cannot run!');
  }
  swim(): void { }
}
