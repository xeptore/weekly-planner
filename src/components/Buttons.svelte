<script>
  import { createEventDispatcher } from "svelte";

  export let selected = 1;

  const dispatch = createEventDispatcher();

  const buildClickHandler = x => () => {
    console.log(`${x} has been clicked!`);
    dispatch("change", {
      selected: x
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
      on:click={buildClickHandler(0)}
      class:positive={selected === 0}>
      Odd
    </button>
    <button
      class="large ui black button"
      on:click={buildClickHandler(1)}
      class:positive={selected === 1}>
      Fixed
    </button>
    <button
      class="large ui black button"
      on:click={buildClickHandler(2)}
      class:positive={selected === 2}>
      Even
    </button>
  </div>
</div>
