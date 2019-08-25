<script>
  import { tick, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let value = '-';
  export let day = '';
  export let index = 0;
  export let filter = '';
  let inTypeMode = false;

  const handleDoubleClick = async () => {
    inTypeMode = true;

    await tick();
    document.getElementById('input').focus();
  };
  const handleSubmit = () => {
    if (!inTypeMode) {
      return;
    }

    inTypeMode = false;
    dispatch('change', {
      value,
      index,
      day,
      type: filter,
    });
  };
  const handleFocus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };
</script>

<style>
  .form,
  .form--input {
    width: 100%;
  }

  .input-wrapper,
  .ui.input > input,
  .form--input {
    text-align: center;
  }
</style>

<td class="center aligned selectable" on:dblclick={handleDoubleClick}>
  {#if inTypeMode && value !== 'X'}
    <form
      on:submit|preventDefault|stopPropagation={handleSubmit}
      class="form"
      autocomplete="off">
      <div class="ui input focus input-wrapper">
        <input
          id="input"
          autocomplete="off"
          bind:value
          class="form--input"
          on:focus={handleFocus}
          on:blur={handleSubmit}
          type="text" />
      </div>
    </form>
  {:else}{value}{/if}
</td>
