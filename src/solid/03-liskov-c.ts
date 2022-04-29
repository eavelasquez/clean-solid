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

((): void => {
  const printCarSeats = (cars: Vehicle[]): void => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log(`Tesla has ${car.getNumberOfSeats()} seats.`);
        continue;
      }

      if (car instanceof Audi) {
        console.log(`Audi has ${car.getNumberOfSeats()} seats.`);
        continue;
      }

      if (car instanceof Toyota) {
        console.log(`Toyota has ${car.getNumberOfSeats()} seats.`);
        continue;
      }

      if (car instanceof Honda) {
        console.log(`Honda has ${car.getNumberOfSeats()} seats.`);
        continue;
      }

      if (car instanceof Volvo) {
        console.log(`Volvo has ${car.getNumberOfSeats()} seats.`);
        continue;
      }
    }
  };

  const cars: Vehicle[] = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(9),
    new Volvo(3),
  ];
  printCarSeats(cars);
})();
