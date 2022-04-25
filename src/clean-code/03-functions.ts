(() => {
  // example 1: function to get information of a movie by id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  } // bad: its name does not do what it says

  function getMovieById(movieId: string) {
    console.log({ movieId });
  } // good: its name does what it says

  // example 2: function to get information about the actors of a movie - actors or cast
  // id is equal to movieId or castId
  function getAllMovieActors(id: string) {
    console.log({ id });
  } // bad: its name does not do what it says

  function getMovieCastById(id: string) {
    console.log({ id });
  } // good: its name does what it says

  // example 4: function to get the bio of the actor by id
  function getUser(actorId: string) {
    console.log({ actorId });
  } // bad: its name does not do what it says

  function getActorBioById(actorId: string) {
    console.log({ actorId });
  } // good: its name does what it says

  // example 5: function to create a new movie
  function movie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  } // bad: its name does not do what it says and not limited to three parameters

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  } // good: order alphabetically

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  } // good: its name does what it says and limited to 3 parameters

  // example 6: function to create a new actor
  function createActorIfActorNotExists(
    fullName: string,
    birthDate: Date
  ): boolean {
    // ...

    // asynchronous task to check name
    // ...
    if (fullName === 'Ai Tanaka') return false;

    console.log('actor created', { fullName, birthDate });
    return true;
  } // bad: name has unnecessary information

  function checkFullName(fullName: string): boolean {
    console.log('checking full name', { fullName });
    // ...
    // asynchronous task to check name
    // ...
    return fullName === 'Ai Tanaka';
  }

  function createActor(fullName: string, birthDate: Date): boolean {
    // ...
    // asynchronous task to check name
    // ...
    if (checkFullName(fullName)) return false;

    console.log('actor created', { fullName, birthDate });
    return true;
  } // good: name does what it says and single responsibility principle

  // example 7: function to get pay amount
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;

    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  } // bad: nested if-else

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  } // good: without nested if-else
});
