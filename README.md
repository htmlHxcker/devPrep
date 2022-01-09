# PrepCard

<div align="center">
    <a href="#">
        <img src="./public/images/PrepCard128.png" width="64" height="64" alt="PrepCards">
    </a>
    <h1>
        <a href="#">
            PrepCard
        </a>
    </h1>
</div>

#### Table of contents

- [What is PrepCard?](#what-is-prepcard)
- [How I worked on this Project](#how-i-worked-on-this-project)
- [Structure of the project](#structure-of-the-project)
- [Challenges](#challenges)
- [Roadmap](#roadmap)
- [Developing Locally and Contributing](#developing-locally-and-contributing)
- [Appreciation](#appreciation)

---

## What is PrepCard?

<img src="./public/images/prepcard-newtab.png" alt="PrepCards New Tab Page">

PrepCard is a project I conceived while learning Japanese along with some other
people and preparing for technical interviews. I didn't know of
[Anki](https://ankiweb.net), or any of it's contemporaries and decided that
flashcards could be a good way for me to practice. This is the first project
that I've embarked on where I was building software for other people (My
_co-learners_) and so I had to think a lot about how an end user would interact
with the extension.

---

## How I worked on this project

I tried to simulate a professional work environemt ~~Where almost all PR's are
merged~~ 👀 by:

- Building the app based on a _Moqup_, which gave me a good outline of how I
  would like it to look: [Screenshot of designs]
- I also, created tasks in Notion and worked based on these tasks which created
  a good workflow for me: [Screenshot of tasks]
- I also made use of feature branches and Pull Requests: [Link to example PR]

## Structure of the Project

- Central state is stored in the Chromium browser implementation of
  `localStorage` for extensions: [Link to example code on GitHub]
- This central state only contains data that are required by more than one
  top-level component i.e user settings are required by both the options and new
  tab page: [Link to example code on GitHub]
- The Central state is initialised in [background.js]() a script which runs in
  the _background_ alongside the extension.
- Component Specific state or _non-central_ state is stored in each component,
  in the case of multiple low-level components requiring the same data from
  state, such state is stored in the closest shared ancestor component [link to
  code on GitHub]
- All Top-level components (i.e Components found in the /src/ui folder) work on
  the same principle as index.js/App.js / index.html in typical
  create-react-apps when bundled.
- Integration tests use the React testing library: [Link to example test on
  GitHub]

## Why I built the project this way

- I didn't use a state management library like Redux on purpose. For this app
  simple `useState` is sufficient. I realized that more and more projects don't
  use Redux anymore since GraphQL or react-query are often used for data
  management.
- styled-components is a great library for styling. It includes an
  auto-prefixer, uses scoped classes, and allows a seamless integration with JS.
- My plan is to become a full-stack developer eventually. But for the beginning
  I focus on the frontend. That's why I decided to use an existing API rather to
  create a custom server. I have basic backend knowledge as well.
- Testing is an essential part of production applications. Testing Library is
  the go-to library in the React community. I covered the essential features of
  the app with tests.

## If I had more time I would change this

- Set up continuous integration to run the tests and ESLint on every Pull
  Request
- Refactor some of the code. Especially this part [link to code on GitHub]
- Add end-to-end tests with Cypress.

## Available Scripts

[List scripts to start or test the app here
