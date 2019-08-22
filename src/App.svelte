<script>
  import AddTodo from './components/AddTodo.svelte'

  let todos = []

  const handleAdd = ({ detail }) => {
    todos = [...todos, detail.title]
  }
</script>

<ul>
  {#each todos as todo}
    <li>{todo}</li>
  {/each}
</ul>

<table class="ui celled table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table>

<AddTodo on:add={handleAdd} />
