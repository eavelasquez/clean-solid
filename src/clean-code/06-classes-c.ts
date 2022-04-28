((): void => {
  // ✅ With applying the Single Responsibility Principle
  // ✅ Prioritize composition over inheritance

  type Gender = 'male' | 'female';

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthDate, gender, name }: PersonProps) {
      this.birthDate = birthDate;
      this.gender = gender;
      this.name = name;
    }

    greet(): string {
      return `Hello, ${this.name}`;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccessDate: Date;
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
    gender: Gender;
    lastOpenFolder: string;
    name: string;
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
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date('2001-01-01'),
    email: 'ai@google.com',
    gender: 'female',
    lastOpenFolder: '/home',
    name: 'Ai',
    role: 'admin',
    workingDirectory: '/usr/home',
  });

  console.log(userSettings.person.greet(), {
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
