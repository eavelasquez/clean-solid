// ✅ With Interface Segregation Principle

export interface Bird {
  eat(): void;
  layEggs(): void;
}

export interface FlyingBird extends Bird {
  fly(): void;
}

export interface RunningBird extends Bird {
  run(): void;
}

export interface SwimmingBird extends Bird {
  swim(): void;
}

export class Toucan implements FlyingBird {
  constructor() { }

  eat(): void { }
  fly(): void { }
  layEggs(): void { }
}

export class Hummingbird implements FlyingBird {
  constructor() { }

  eat(): void { }
  fly(): void { }
  layEggs(): void { }
}

export class Ostrich implements RunningBird {
  constructor() { }

  eat(): void { }
  layEggs(): void { }
  run(): void { }
}

export class Penguin implements SwimmingBird {
  constructor() { }

  eat(): void { }
  layEggs(): void { }
  swim(): void { }
}
