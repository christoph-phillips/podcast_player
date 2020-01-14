# :notes: Podcast Player Task :notes:

## View Live [@here](https://vigorous-mclean-17a21b.netlify.com/)

## Introduction

The challenge was to simulate a podcast player through a web interface with a list of available episodes to listen to using the Podcast.co API.

## Local Install

- Install dependencies `yarn`
- Start the development server `yarn start`
- Go to `localhost:3000`

## Technical Decisions

Here is an overview of my technical choices for the project:

### Code Formatting

Prettier is used for code formatting, VSCode is setup to format all files on save. There is also a script to format the entire codebase `yarn format`.

### Redux

As we discussed Redux extensively during our call I decided to use redux in the project. It consists of:

- One set of actions for controlling the state of the application (`podcasts_actions.js`).
- One reducer to reflect the state of the application (`podcasts_reducer.js`).
- Custom middleware for controlling audio playback (`audio.js`).

### A PodcastPlayer Library

PodcastPlayer.js contains the functionality for loading, playing and pausing. It also assigns `oncanplaythrough` and `onended` callback functions for audio loading and queuing next tracks.

For many use cases I have found that it is best to extract functionality away from components themselves and into external libraries that can be independently tested. Then the React components remain as much a view layer as possible.

### Styles

There is a basic CSS reset file for covering all browsers.

Otherwise all components are styled with the `styled-components` library.

Each component has its own `StyledComponents.js` file.

### Testing

You can run the unit tests in watch mode by running `test:watch`. For deployment the test suite runs once using `test:unit`.

I have made various decisions with the unit tests.

- Components should be abstracted away from a Connected store when being tested, they should be tested independently of any 3rd party libraries.
- Components are all tested with a snapshot and unit tests that cover basic functionality.
- PodcastPlayer and audio middleware are tested with spies for HTMLMediaElement functions. This means we can test in a jsdom environment rather than in the browser.
- Actions are pure functions that return type and payload and so are easy to test. For the one async action, the store is mocked and the actions dispatched are compared to the order they were received by the store.
- Tests live in the same directory as the files they are testing.
- Mock data is used from the test folder.

## Deployment

Continuous deployment with unit testing is handled by Netlify.
