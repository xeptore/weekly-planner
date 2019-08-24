<script>
  import Table from "./components/Table.svelte";
  import Buttons from "./components/Buttons.svelte";

  import range from "lodash/range";
  import uuid from "uuid/v4";
  import { cloneDeepRows } from "./util";

  // 0 -> odd
  // 1 -> all
  // 2 -> even
  let filter = 1;

  const rest = range(6).map(() => "-");
  let rows = [
    {
      day: "Saturday",
      data: [...rest],
      key: uuid()
    },
    {
      day: "Sunday",
      data: [...rest],
      key: uuid()
    },
    {
      day: "Monday",
      data: [...rest],
      key: uuid()
    },
    {
      day: "Tuesday",
      data: [...rest],
      key: uuid()
    },
    {
      day: "Wednesday",
      data: [...rest],
      key: uuid()
    },
    {
      day: "Thursday",
      data: [...rest],
      key: uuid()
    },
    {
      day: "Friday",
      data: [...rest],
      key: uuid()
    }
  ];

  const handleFilterChange = ({ detail }) => {
    filter = detail.selected;
  };

  const handleTableCellChange = ({ detail }) => {
    rows = cloneDeepRows(rows, detail);
  };

  $: {
    console.log(rows);
  }
</script>

<style>
  .wrapper {
    margin-top: 1rem;
  }
</style>

<div class="ui container wrapper">
  <Table {rows} on:change={handleTableCellChange} />
  <Buttons selected={filter} on:change={handleFilterChange} />
</div>
