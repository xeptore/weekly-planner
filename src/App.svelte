<script>
  import { cloneDeepRows } from './util';

  import Table from './components/Table.svelte';
  import Buttons from './components/Buttons.svelte';

  export let filter = '';
  export let rows = [];

  const handleFilterChange = ({ detail }) => {
    filter = detail.selected;
  };

  const handleTableCellChange = ({ detail }) => {
    rows = cloneDeepRows(rows, detail);
  };
</script>

<style>
  .wrapper {
    padding-top: 3rem;
  }

  span {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    position: fixed;
    bottom: 0;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    padding: .5rem;
  }
</style>

<div class="ui container wrapper">
  <Table {rows} {filter} on:change={handleTableCellChange} />
  <Buttons selected={filter} on:change={handleFilterChange} />
</div>

<span>made to <i dir="ltr" title="work!" class="cog icon"></i> by <strong><a target="_blank" href="https://github.com/xeptore">xeptore</a></strong></span>
