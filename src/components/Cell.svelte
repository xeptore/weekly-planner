<script>
  import { tick, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let part = {
    ALL: {
      value: '-',
      enable: true,
    },
    ODD: {
      value: '-',
      enable: true,
    },
    EVEN: {
      value: '-',
      enable: true,
    },
  };
  export let day = '';
  export let index = 0;
  export let filter = '';
  let inTypeMode = false;
  $: value = part[filter].value;
  $: enable = part[filter].enable && part[filter].value !== 'X';

  const handleDoubleClick = async () => {
    if (!enable) {
      return;
    }

    inTypeMode = true;

    await tick();
    document.getElementById('input').focus();
  };
  const handleSubmit = async () => {
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

    await tick();
  };
  const handleFocus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };
  const handleChange = (e) => {
    value = e.target.value;
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
    font-family: "yekan";
    text-align: center;
  }
  td.selectable {
    cursor: pointer;
  }
  td.disable {
    cursor: not-allowed;
    user-select: none;
  }
</style>

<td class="center aligned selectable" on:dblclick={handleDoubleClick} class:disable={!enable}>
  {@debug part, filter}
  {#if inTypeMode && enable}
    <form
      on:submit|preventDefault|stopPropagation={handleSubmit}
      class="form"
      autocomplete="off">
      <div class="ui input focus input-wrapper">
        <input
          id="input"
          autocomplete="off"
          on:change={handleChange}
          {value}
          class="form--input"
          on:focus={handleFocus}
          on:blur={handleSubmit}
          type="text" />
      </div>
    </form>
  {:else if part[filter].value === 'X'}
    {part['ALL'].value}
  {:else}{part[filter].value}{/if}
</td>
