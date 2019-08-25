import App from './App.svelte';

import { getInitialStates, INITIAL_FILTER } from './init';


const app = new App({
  target: document.body,
  props: {
    rows: getInitialStates(),
    filter: INITIAL_FILTER,
  },
});

export default app;
