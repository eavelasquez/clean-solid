/**
 * self-executing anonymous function
 */
((): void => {
  // example 1: celsius temperature array
  const arrayOfNums = [33.6, 12.34]; // ❌ bad: non-descriptive name
  const celsiusTemperatures: number[] = [33.6, 12.34]; // ✅ good: descriptive name and pluralized name

  // example 2: server ip address
  const ip = '123.123.123.123'; // ❌ bad: non-descriptive name
  const ipAddress: string = '123.123.123.123'; // ✅ good: descriptive name

  // example 3: list of users and list of users emails
  const people = [
    { name: 'Ai', email: 'ai@google.com' },
    { name: 'Hana', email: 'hana@google.com' },
    { name: 'Shiro', email: 'shiro@google.com' },
  ]; // ❌ bad: non-descriptive name

  const users: { name: string; email: string }[] = [
    { name: 'Ai', email: 'ai@google.com' },
    { name: 'Hana', email: 'hana@google.com' },
    { name: 'Shiro', email: 'shiro@google.com' },
  ]; // ✅ good: descriptive name and pluralized name

  // example 4: list of users emails
  const emails = people.map((p) => p.email); // ❌ bad: non-descriptive name
  const userEmails: string[] = users.map((user) => user.email); // ✅ good: descriptive name and pluralized name

  // example 5: boolean variables of a videogame
  const jump = false; // ❌ bad: non-descriptive name
  const canJump: boolean = false; // ✅ good: descriptive name

  const run = true; // ❌ bad: non-descriptive name
  const canRun: boolean = true; // ✅ good: descriptive name

  const items = true; // ❌ bad: non-descriptive name
  const hasItems: boolean = false; // ✅ good: descriptive name

  const loading = false; // ❌ bad: non-descriptive name
  const isLoading: boolean = false; // ✅ good: descriptive name

  // example 6: other variables
  const start = new Date().getTime(); // ❌ bad: non-descriptive name
  const startTime: number = new Date().getTime(); // ✅ good: descriptive name

  const end = new Date().getTime(); // ❌ bad: non-descriptive name
  const endTime: number = new Date().getTime() - start; // ✅ good: descriptive name

  // example 6: get all books
  function book() {
    throw new Error('Not implemented');
  } // ❌ bad: non-descriptive name

  interface Book { }

  function getBooks(): Book[] {
    throw new Error('Not implemented');
  } // ✅ good: descriptive name and pluralized name

  // example 7: get all books by a specific URL
  function BooksUrl(_u: string) {
    throw new Error('Not implemented');
  } // ❌ bad: non-descriptive name

  function getBooksByUrl(_url: string): Book[] {
    throw new Error('Not implemented');
  } // ✅ good: descriptive name

  // example 8: get the area of a square based on its sides
  function squareArea(_s: number) {
    throw new Error('Not implemented');
  } // ❌ bad: non-descriptive name

  function getSquareArea(_side: number): number {
    throw new Error('Not implemented');
  } // ✅ good: descriptive name

  // example 9: print the job
  function printJobIfJobIsActive() {
    throw new Error('Not implemented');
  } // ❌ bad: non-descriptive name

  function printJob() {
    throw new Error('Not implemented');
  } // ✅ good: descriptive name
})();
