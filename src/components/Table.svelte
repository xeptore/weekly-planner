<script>
  import Cell from './Cell.svelte';

  export let rows = [];
  export let filter = '';
</script>

<style>
  .smile {
    font-family: sans-serif;
  }
</style>

<table
  class="ui large celled definition inverted very padded middle aligned seven
  column table unstackable">
  <thead>
    <tr>
      <th class="right aligned" />
      <th class="center aligned">۸-۱۰</th>
      <th class="center aligned">۱۰-۱۲</th>
      <th class="center aligned">۱۲-۱۴</th>
      <th class="center aligned">۱۴-۱۶</th>
      <th class="center aligned">۱۶-۱۸</th>
      <th class="center aligned">۱۸-۲۰</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as day (day.key)}
      <tr>
        <td class="right aligned">{day.name}</td>
        {#each day.parts as part, idx}
          <Cell {part} on:change day={day.name} {filter} index={idx} />
        {/each}
      </tr>
    {/each}
    <tr>
      <td class="right aligned">جمعه</td>
      <td colspan="6" class="center aligned">
        تعطیله، برو حال کن
        <span class="smile">:)</span>
      </td>
    </tr>
  </tbody>
</table>
