import App from './App.svelte';

import { buildInitialRows, INITIAL_FILTER } from './init';

const app = new App({
  target: document.body,
  props: {
    rows: buildInitialRows(),
    filter: INITIAL_FILTER,
  },
});

export default app;
