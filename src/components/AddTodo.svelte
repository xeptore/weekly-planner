<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let title = ''

  const handleSubmit = () => {
    dispatch('add', { title })
    title = ''
  }
</script>

<form on:submit|preventDefault|stopPropagation={handleSubmit}>
  <input type="text" bind:value={title} />
  <input type="submit" value="Add" />
</form>
