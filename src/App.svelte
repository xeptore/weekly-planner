<script>
  import { cloneDeepRows } from "./util";

  import Table from "./components/Table.svelte";
  import Buttons from "./components/Buttons.svelte";

  export let filter = "";
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
    margin-top: 1rem;
  }
</style>

<div class="ui container wrapper">
  <Table {rows} {filter} on:change={handleTableCellChange} />
  <Buttons selected={filter} on:change={handleFilterChange} />
</div>
