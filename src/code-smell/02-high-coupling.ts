(() => {
  // Without applying the Single Responsibility Principle
  // With high coupling, we can't separate the concerns

  type Gender = 'male' | 'female';

  class Person {
    constructor(
      public birthDate: Date,
      public firstName: string,
      public gender: Gender,
      public lastName: string
    ) { }
  }

  class User extends Person {
    constructor(
      birthDate: Date,
      firstName: string,
      gender: Gender,
      lastName: string,
      private lastAccessDate: Date,
      public email: string,
      public role: string
    ) {
      super(birthDate, firstName, gender, lastName);
      this.lastAccessDate = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      birthDate: Date,
      email: string,
      firstName: string,
      gender: Gender,
      lastName: string,
      public lastOpenFolder: string,
      public workingDirectory: string,
      role: string
    ) {
      super(birthDate, firstName, gender, lastName, new Date(), email, role);
    }
  }

  const userSettings = new UserSettings(
    new Date('2001-01-01'),
    'ai@google.com',
    'Ai',
    'female',
    '/usr/home',
    'Tanaka',
    '/development',
    'developer'
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
