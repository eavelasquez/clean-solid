((): void => {
  // ❌ Without applying the Single Responsibility Principle

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
    birthDate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccessDate: Date;
    public role: string;

    constructor({ birthDate, email, gender, name, role }: UserProps) {
      super({ birthDate, gender, name });
      this.email = email;
      this.lastAccessDate = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
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

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthDate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birthDate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  console.log(userSettings.greet(), {
    userSettings,
    credentials: userSettings.checkCredentials(),
  });
})();
