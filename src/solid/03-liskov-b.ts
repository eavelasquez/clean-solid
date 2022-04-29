// ❌ Without Liskov Substitution Principle
export class Tesla {
  constructor(private numberOfSeats: number) { }

  getNumberOfTeslaSeats(): number {
    return this.numberOfSeats;
  }
}

export class Audi {
  constructor(private numberOfSeats: number) { }

  getNumberOfAudiSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota {
  constructor(private numberOfSeats: number) { }

  getNumberOfToyotaSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda {
  constructor(private numberOfSeats: number) { }

  getNumberOfHondaSeats(): number {
    return this.numberOfSeats;
  }
}

export class Volvo {
  constructor(private numberOfSeats: number) { }

  getNumberOfVolvoSeats(): number {
    return this.numberOfSeats;
  }
}
