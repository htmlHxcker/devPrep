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
- [Developing Locally and Contributing](#developing-locally-and-contributing)
- [Contribution Guidlines](#Contribution-guidelines)
- [Structure of the project](#structure-of-the-project)
- [To Do:](#todo)

---

## What is PrepCard?

<img src="./public/images/README/prepcard-newtab.png" alt="PrepCards New Tab Page">

PrepCard is a project I conceived while learning Japanese along with some other
people and preparing for technical interviews. I didn't know of
[Anki](https://ankiweb.net), or any of it's contemporaries and decided that
flashcards could be a good way for me to practice. This is the first project
that I've embarked on where I was building software for other people (My
_co-learners_) and so I had to think a lot about how an end user would interact
with the extension.

---
## Getting Started 
 - install node...
 - ...
 - ...
 - ... fill me out

## Contribution Guidlines

- Tasks are created in Notion and used as a kanban system for organizing work
- All PR's are required to be orgnized in feature branches following gitflow syntax. For example: `clinton(bug fix): cleaning console logs `

## Architecture of the Project
- Building the app based on a _Moqup_
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
- Integration tests use the React testing library
- styled-components is used for styling

## To do: major features to add to augment this project:

- Set up continuous integration to run the test suite and ESLint on every Pull
  Request
- Refactor some of the code. Especially this part [link to code on GitHub]
- Add end-to-end tests with Cypress.

