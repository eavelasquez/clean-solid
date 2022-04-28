((): void => {
  // ❌ Without applying the Single Responsibility Principle

  type Gender = 'male' | 'female';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) { }

    greet(): string {
      return `Hello, ${this.name}`;
    }
  }

  class User extends Person {
    public lastAccessDate: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccessDate = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'ai@google.com',
    'admin',
    'Ai',
    'female',
    new Date('2001-01-01')
  );

  console.log(userSettings.greet(), {
    userSettings,
    credentials: userSettings.checkCredentials(),
  });
})();
