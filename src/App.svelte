<script>
  import Table from "./components/Table.svelte";
</script>

<style>
  .header {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .header.header--text-center {
    text-align: center;
  }
</style>

<div class="ui container">
  <div class="header header--text-center">
    <h1 class="header__title">Welcome!</h1>
  </div>
  <Table />
</div>
