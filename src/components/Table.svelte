<script>
  import Cell from './Cell.svelte';

  export let rows = [];
  export let filter = '';
</script>

<table
  class="ui large celled definition inverted very padded middle aligned seven column table unstackable">
  <thead>
    <tr>
      <th class="right aligned" />
      <th class="center aligned">8-10</th>
      <th class="center aligned">10-12</th>
      <th class="center aligned">12-14</th>
      <th class="center aligned">14-16</th>
      <th class="center aligned">16-18</th>
      <th class="center aligned">18-20</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as day (day.key)}
      <tr>
        <td class="right aligned">{day.name}</td>
        {#each day.parts as part, idx}
          <Cell
            {part}
            on:change
            day={day.name}
            {filter}
            index={idx} />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
