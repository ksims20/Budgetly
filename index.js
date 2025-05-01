/*
Entry point of the React Native app, registers the main component with App.js with Expo,
so that the app can start correctly.
*/

import { registerRootComponent } from "expo";

import App from "./FrontEnd/App.js";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
