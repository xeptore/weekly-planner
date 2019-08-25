<script>
  import { createEventDispatcher } from 'svelte';

  import { FILTERS } from '../util';

  export let selected = FILTERS.ALL;

  const dispatch = createEventDispatcher();

  const buildClickHandler = (x) => () => {
    dispatch('change', {
      selected: x,
    });
  };
</script>

<style>
  .buttons-container {
    margin-top: 1.5rem;
  }
</style>

<div class="ui centered grid">
  <div class="buttons-container">
    <button
      class="large ui black button"
      on:click={buildClickHandler(FILTERS.ODD)}
      disabled={selected === FILTERS.ODD}>
      فرد
    </button>
    <button
      class="large ui black button"
      on:click={buildClickHandler(FILTERS.ALL)}
      disabled={selected === FILTERS.ALL}>
      ثابت
    </button>
    <button
      class="large ui black button"
      on:click={buildClickHandler(FILTERS.EVEN)}
      disabled={selected === FILTERS.EVEN}>
      زوج
    </button>
  </div>
</div>
