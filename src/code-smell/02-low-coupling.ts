((): void => {
  // ✅ With applying the Single Responsibility Principle
  // ✅ Prioritize composition over inheritance

  type Gender = 'male' | 'female';

  interface PersonProps {
    birthDate: Date;
    firstName: string;
    gender: Gender;
    lastName: string;
  }

  class Person {
    public birthDate: Date;
    public firstName: string;
    public gender: Gender;
    public lastName: string;

    constructor({ birthDate, firstName, gender, lastName }: PersonProps) {
      this.birthDate = birthDate;
      this.firstName = firstName;
      this.gender = gender;
      this.lastName = lastName;
    }

    greet(): string {
      return `Hello, ${this.firstName} ${this.lastName}`;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    private lastAccessDate: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccessDate = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    firstName: string;
    gender: Gender;
    lastOpenFolder: string;
    lastName: string;
    role: string;
    workingDirectory: string;
  }

  // Note: this class is a composition of the other classes
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthDate,
      email,
      firstName,
      gender,
      lastName,
      lastOpenFolder,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ birthDate, firstName, gender, lastName });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date('2001-01-01'),
    email: 'ai@google.com',
    firstName: 'Ai',
    gender: 'female',
    lastName: 'Tanaka',
    lastOpenFolder: '/home',
    role: 'developer',
    workingDirectory: '/usr/home',
  });

  console.log(userSettings.person.greet(), {
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
