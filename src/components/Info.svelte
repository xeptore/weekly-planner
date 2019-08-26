<style>
  .icon {
    margin-right: 0.5rem;
    color: rgba(0, 0, 0, 0.75);
  }

  .icon:hover+.popup,
  .popup:hover {
    display: block !important;
  }

  .icon-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    width: 100%;
  }

  .popup {
    display: none;
    position: relative;
    right: 0;
    margin-top: 5px;
  }

  .popup--header {
    font-family: "yekan";
    font-weight: bolder;
  }

  .text-eng {
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }
</style>

<div class="icon-container">
  <i class="info circle icon large" />
  <div
    id="info-popup"
    class="ui popup bottom right transition"
    >
    <div class="popup--header">راهنما</div>
    <div class="content">
      با دابل کلیک روی هر فیلد میتونید اون فیلد رو به حالت نوشتن تبدیل کنید و برای ثبت کلید
      <span class="text-eng"> Enter </span>
      رو بزنید یا روی هر بخش دیگه کلیک کنید.
    </div>
  </div>
</div>
