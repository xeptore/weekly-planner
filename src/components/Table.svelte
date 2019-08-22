<script>
  import Cell from "./Cell.svelte";
  import range from "lodash/range";
  import { indexFromDay } from "../util";
  import immutable from "immutable";
  import uuid from "uuid/v4";

  const rest = range(6).map(() => "-");

  let rows = immutable.fromJS([
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
  ]);

  const handleChange = ({ detail }) => {
    const day = indexFromDay(detail.day);
    const { index, value } = detail;
    rows = rows.setIn([day, index + 1], value);
  };
</script>

<table
  class="ui large celled definition inverted very padded middle aligned eight
  column table">
  <thead>
    <tr>
      <th class="center aligned" />
      <th class="center aligned">8-10</th>
      <th class="center aligned">10-12</th>
      <th class="center aligned">12-14</th>
      <th class="center aligned">14-16</th>
      <th class="center aligned">16-18</th>
      <th class="center aligned">18-20</th>
    </tr>
  </thead>
  <tbody>
    {#each rows.toArray() as row}
      <tr>
        <td>{row.get('day')}</td>
        {#each row.get('data').toArray() as x, idx (`${row.get('key')}`)}
          {@debug x}
          <Cell
            value={x}
            on:change={handleChange}
            day={row.get('day')}
            index={idx} />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
