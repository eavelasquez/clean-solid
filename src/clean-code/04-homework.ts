/**
 * self-executing anonymous function
 * note: before executing, comment functions with the TODO comment
 */
((): void => {
  // TODO: solve without the triple-equals
  function isRedFruit(fruit: string): boolean {
    if (fruit === 'apple' || fruit === 'cherry' || fruit === 'plum') {
      return true;
    } else {
      return false;
    }
  } // bad: use triple-equals

  // hints: includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const fruits: string[] = ['apple', 'cherry', 'plum'];

    return fruits.includes(fruit);
  } // good: use includes

  // TODO: simplify this function
  function getFruitsByColor(color: string): string[] {
    if (color === 'red') {
      return ['apple', 'cherry', 'plum'];
    } else if (color === 'yellow') {
      return ['banana', 'pineapple'];
    } else if (color === 'purple') {
      return ['grape', 'blackberry'];
    } else if (color === 'green') {
      return ['kiwi', 'avocado'];
    } else {
      throw new Error('unknown color, must be red, yellow, purple or green');
    }
  } // bad: use if-else-if-else

  // hints: switch? object literal? type? validate possible colors
  type FruitColor = 'red' | 'yellow' | 'purple' | 'green';

  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor: { [key: string]: string[] } = {
      red: ['apple', 'cherry', 'plum'],
      yellow: ['banana', 'pineapple'],
      purple: ['grape', 'blackberry'],
      green: ['kiwi', 'avocado'],
    };

    // validate if color is valid
    if (!Object.keys(fruitsByColor).includes(color)) {
      throw new Error('unknown color, must be red, yellow, purple or green');
    }

    return fruitsByColor[color];
    // switch (color) {
    //   case 'red':
    //     return ['apple', 'cherry', 'plum'];
    //   case 'yellow':
    //     return ['banana', 'pineapple'];
    //   case 'purple':
    //     return ['grape', 'blackberry'];
    //   case 'green':
    //     return ['kiwi', 'avocado'];
    //   default:
    //     throw new Error('unknown color, must be red, yellow, purple or green');
    // }
  } // good: use switch or object literal

  // TODO: simplify this function
  const isFirstStepWorking = true;
  const isSecondStepWorking = true;
  const isThirdStepWorking = true;
  const isFourthStepWorking = true;

  function workingSteps(): string {
    if (isFirstStepWorking === true) {
      if (isSecondStepWorking === true) {
        if (isThirdStepWorking === true) {
          if (isFourthStepWorking === true) {
            return 'Working steps are done!';
          } else {
            return 'Fourth step is not working.';
          }
        } else {
          return 'Third step is not working.';
        }
      } else {
        return 'Second step is not working.';
      }
    } else {
      return 'First step is not working.';
    }
  } // bad: nested if-else

  // hints: validate each step
  function workingSteps(): string {
    let message: string = '';

    if (!isFirstStepWorking) message += 'First step is not working. ';
    if (!isSecondStepWorking) message += 'Second step is not working. ';
    if (!isThirdStepWorking) message += 'Third step is not working. ';
    if (!isFourthStepWorking) message += 'Fourth step is not working. ';

    // if no step failed, message will be 'Working steps are done!'
    if (message.length === 0) message = 'Working steps are done!';

    return message;
  } // good: without nested if-else

  // call isRedFruit function
  console.log({ isRedFruit: isRedFruit('cherry'), fruit: 'cherry' }); // isRedFruit: true, fruit: 'cherry'
  console.log({ isRedFruit: isRedFruit('pineapple'), fruit: 'pineapple' }); // isRedFruit: true, fruit: 'pineapple'

  // call getFruitsByColor function
  console.log({ redFruits: getFruitsByColor('red') }); // ['apple', 'cherry', 'plum']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['banana', 'pineapple']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['grape', 'blackberry']
  console.log({ greenFruits: getFruitsByColor('green') }); // ['kiwi', 'avocado']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: unknown color, must be red, yellow, purple or green

  // call workingSteps function
  console.log({ workingSteps: workingSteps() }); // 'Working steps are done!'
});
