import { Tesla, Audi, Toyota, Honda } from './03-liskov-b';

((): void => {
  const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda)[]): void => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log(car.getNumberOfTeslaSeats());
        continue;
      }

      if (car instanceof Audi) {
        console.log(car.getNumberOfAudiSeats());
        continue;
      }

      if (car instanceof Toyota) {
        console.log(car.getNumberOfToyotaSeats());
        continue;
      }

      if (car instanceof Honda) {
        console.log(car.getNumberOfHondaSeats());
        continue;
      }
    }
  };

  const cars: (Tesla | Audi | Toyota | Honda)[] = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(9),
  ];
  printCarSeats(cars);
})();
