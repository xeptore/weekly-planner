<script>
  import { createEventDispatcher } from "svelte";
  import Cell from "./Cell.svelte";

  export let rows = [];
</script>

<table
  class="ui large celled definition inverted very padded middle aligned eight
  column table">
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
    {#each rows as row (row.key)}
      <tr>
        <td class="right aligned">{row.day}</td>
        {#each row.data as d, idx}
          <Cell value={d} on:change day={row.day} index={idx} />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
