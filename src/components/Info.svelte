<style>
  .icon {
    margin-right: 0.5rem;
    color: rgba(0, 0, 0, 0.75);
  }

  .icon:hover + .popup,
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
    max-width: none;
    width: 30%;
    text-align: justify;
    position: relative;
    right: 0;
    margin-top: 5px;
  }

  .popup--header {
    font-family: "yekan";
    font-weight: bolder;
  }

  .text-eng {
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

  ul.ui.list li:before {
    margin-right: -1.25rem;
  }

  ul.ui.list {
    margin-left: 0;
    margin-right: 1rem;
  }
</style>

<div class="icon-container">
  <i class="info circle icon large" />
  <div id="info-popup" class="ui popup bottom right transition">
    <div class="popup--header">راهنما</div>
    <div class="content">
      <ul class="ui list">
        <li value="*">
          با دابل کلیک روی هر فیلد میتونید اون فیلد رو به حالت نوشتن تبدیل کنید
          و برای ثبت کلید
          <span class="text-eng">Enter</span>
          رو بزنید یا روی هر بخش دیگه کلیک کنید.
        </li>
        <li>
          با استفاده از دکمه‌های پایین جدول هم میتونید برای هفته‌های زوج، فرد یا
          ثابت دروس رو وارد کنید.
        </li>
      </ul>
    </div>
  </div>
</div>
