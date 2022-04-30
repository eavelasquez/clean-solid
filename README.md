# Clean Code and SOLID Principles

This is a Vanilla TypeScript project on Vite, which contains exercises on Clean Code and SOLID Principles.

## Development

To clone this repository, run the following command:

```bash
git clone https://github.com/eavelasquez/clean-solid.git
```

To run the project, run:

```bash
yarn install
or
npm install
```

To start the project in development mode, run:

```bash
yarn dev
or
npm run dev
```

### Structure of the project

```
clean-solid
├── docs
│    └── slides.pdf
├── src
│    ├── clean-code
│    │    ├── 01-names.ts
│    │    ├── 02-name-types.ts
│    │    ├── 03-functions.ts
│    │    ├── 04-nested-if-else.ts
│    │    ├── 05-dry.ts
│    │    ├── 06-classes-a.ts
│    │    ├── 06-classes-b.ts
│    │    ├── 06-classes-c.ts
│    │    └── 07-srp.ts
│    ├── code-smell
│    │    ├── 01-singleton.js
│    │    ├── 02-high-coupling.ts
│    │    └── 03-high-coupling.ts
│    ├── data
│    │    └── local-database.json
│    ├── solid
│    │    ├── 01-srp.ts
│    │    ├── 02-open-close-a.ts
│    │    ├── 02-open-close-b.ts
│    │    ├── 02-open-close-c.ts
│    │    ├── 03-liskov-a.ts
│    │    ├── 03-liskov-b.ts
│    │    ├── 03-liskov-c.ts
│    │    ├── 04-segregation-a.ts
│    │    ├── 04-segregation-b.ts
│    │    ├── 05-dependency-a.ts
│    │    ├── 05-dependency-b.ts
│    │    ├── 05-dependency-c.ts
│    │    └── 05-dependency-d.ts
│    ├── main.ts
│    └── style.css
├── index.html
└── package.json
```

## What is Clean Code?

Clean Code is a programming style that follows a set of rules to write code.

- [Coding Conventions](https://en.wikipedia.org/wiki/Coding_convention)
- [Code Documentation](https://en.wikipedia.org/wiki/Code_documentation)
- [Code Review](https://en.wikipedia.org/wiki/Code_review)
- [Code Reuse](https://en.wikipedia.org/wiki/Code_reuse)
- [Code Structure](https://en.wikipedia.org/wiki/Code_structure)
- [Code Style](https://en.wikipedia.org/wiki/Code_style)
- [Code Test](https://en.wikipedia.org/wiki/Code_test)

## What is SOLID Principles?

SOLID is a set of principles that are used to design software.

- [S] [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [O] [Open/Closed Principle](https://en.wikipedia.org/wiki/Open-closed_principle)
- [L] [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- [I] [Interface Segregation Principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- [D] [Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

### References

- [Clean Code JavaScript by Miguel A. Gomez](https://cleanjavascript.es/)
- [Refactoring Guru by Khmelnitske Shosse](https://refactoring.guru/)
