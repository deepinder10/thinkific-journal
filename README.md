# Task

Provide the functionality to allow for multiple people to contribute to an online journal.
User stories:
○ As an anonymous user I can post a message to the journal.
○ As an anonymous user I can retrieve the list of journal entries, sorted by creation time. For
each entry, I see the message as well as date & time of when it was posted.

## Getting Started

### 1. Get to know project tech stack

This simple project is a starting point for your take-home test. It is built with the following technologies:

- [React](https://reactjs.org/), a JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/), a frontend framework for server-side rendering, easy routing, serverless RESTful API
- [Prisma](https://www.prisma.io/), a database ORM for Node.js
  - Scaffolding is set up for SQLite
  - You are free to use other databases of your choice


### Instructions to run assignment locally

npm i
npm run dev

For jest - npm run test
For Cypress - npm run e2e:headless

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

### Extra Features
1. Cypress testing
2. Semantic Analysis of message (3 moods are shown, positive, negative and neutral)
3. Responsive and accesibility

I have assumed the user is anonymous and created a JWT for him and kept in cookie to identify if he comes back and posts again, if in future we need to find all posts by the anonymous user. The schema is made by thinking that the user can authenticate in the future(field email is preserved due to that). The JWT for anaonymous user is never expiring for the purpose of this assignment.

### Shortcuts/Compromises made

NextJS serverless functions used for Backend implementation. I could have handled the authentication beyond anonymous user and created a user account and then upgraded his access. Could have used refresh tokens to refresh the expired tokens.

### Other information

Database runs on MySQL 8.0.25 on AWS RDS instance. NextJS and NodeJS are deployed on Vercel, so the loading times can vary as it is a free account and deployed in us-east-1.
I have used 3 libraries for sentiment analaysis which were required, 1 for cookie parsing in NextJS and Serverless NodeJS,
SASS stylesheets for styling, CSS Modules for scoping and BEM methodology for class naming convention. superjson module used to serialize date object in JSON in getServerSideProps.
Unit tests are done with jest and are kept in ** tests ** folder, while cypress tests are in cypress/integration folder.
Read More functionality on long messages is also implemented.
