// ✅ With Liskov Substitution Principle
// ✅ Without Open-Close Principle
export abstract class Vehicle {
  constructor() { }

  // getNumberOfSeats(): number {
  //   throw new Error('Method not implemented');
  // }

  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Volvo extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

((): void => {
  const printCarSeats = (cars: Vehicle[]): void => {
    cars.forEach((car: Vehicle) => {
      console.log(`${car.constructor.name} has ${car.getNumberOfSeats()} seats`);
    });
  };

  const cars: Vehicle[] = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(9),
    new Volvo(3),
    new Ford(6),
  ];
  printCarSeats(cars);
})();
