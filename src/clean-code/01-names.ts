(() => {
  // example 1
  // bad: names are not descriptive

  // files to evaluate
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 6, f: false },
    { id: 7, f: true },
  ];

  // files to delete
  const files = fs.map(f => f.f);

  // example 2
  // good: names are descriptive

  // files to evaluate
  const filesToEvaluate = [
    { id: 1, marked: false },
    { id: 2, marked: false },
    { id: 3, marked: true },
    { id: 4, marked: false },
    { id: 5, marked: false },
    { id: 6, marked: false },
    { id: 7, marked: true },
  ];

  // files to delete
  const filesToDelete = filesToEvaluate.map(file => file.marked);

  // example 3
  // bad: names are redundant
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // example 4
  // good: names are meaningful
  class User { };
  interface User { };

  // TODO: task 1 - add descriptive names for the following variables

  const ddmmyyyy = new Date(); // bad: ddmmyyyy is not descriptive
  const today = new Date(); // good: today is descriptive

  const d: number = 23; // bad: d is not descriptive
  const elapsedTimeInDays: number = 23; // good: elapsedTimeInDays is descriptive

  const dir = 33; // bad: dir is not descriptive
  const numberFilesOfDirectory = 33; // good: numberFilesOfDirectory is descriptive

  const name = 'Ai'; // bad: name is not descriptive
  const firstName = 'Ai'; // good: firstName is descriptive

  const dms = 12; // bad: dms is not descriptive
  const daysSinceLastModification = 12; // good: daysSinceLastModification is descriptive

  const max = 6; // bad: max is not descriptive
  const maxClassesPerStudent = 6; // good: maxClassesPerStudent is descriptive
});
