// ❌ With Liskov Substitution Principle
// ❌ Without Open-Close Principle
import { Tesla, Audi, Toyota, Honda, Volvo } from './03-liskov-b';

((): void => {
  const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda | Volvo)[]): void => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log(`Tesla has ${car.getNumberOfTeslaSeats()} seats.`);
        continue;
      }

      if (car instanceof Audi) {
        console.log(`Audi has ${car.getNumberOfAudiSeats()} seats.`);
        continue;
      }

      if (car instanceof Toyota) {
        console.log(`Toyota has ${car.getNumberOfToyotaSeats()} seats.`);
        continue;
      }

      if (car instanceof Honda) {
        console.log(`Honda has ${car.getNumberOfHondaSeats()} seats.`);
        continue;
      }

      if (car instanceof Volvo) {
        console.log(`Volvo has ${car.getNumberOfVolvoSeats()} seats.`);
        continue;
      }
    }
  };

  const cars: (Tesla | Audi | Toyota | Honda | Volvo)[] = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(9),
    new Volvo(3),
  ];
  printCarSeats(cars);
})();
