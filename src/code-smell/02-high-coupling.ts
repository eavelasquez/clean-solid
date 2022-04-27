(() => {
  // Without applying the Single Responsibility Principle
  // With high coupling, we can't separate the concerns

  type Gender = 'male' | 'female';

  class Person {
    constructor(
      public birthDate: Date,
      public gender: Gender,
      public name: string
    ) {}
  }

  class User extends Person {
    constructor(
      birthDate: Date,
      gender: Gender,
      name: string,
      private lastAccessDate: Date,
      public email: string,
      public role: string
    ) {
      super(birthDate, gender, name);
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
      gender: Gender,
      name: string,
      public lastOpenFolder: string,
      public workingDirectory: string,
      role: string
    ) {
      super(birthDate, gender, name, new Date(), email, role);
    }
  }

  const userSettings = new UserSettings(
    new Date('2001-01-01'),
    'ai@google.com',
    'female',
    'Ai',
    '/usr/home',
    '/development',
    'developer'
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
