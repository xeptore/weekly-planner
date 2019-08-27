<script>
  import { clear } from '../util/storage';

  const handleClick = () => {
    if (!window.confirm('مطمعنی میخوای داده‌های جدول پاک بشن؟')) {
      return;
    }
    clear();
    location.reload(true);
  };
</script>

<button on:click={handleClick} title="پاک کردن اطلاعات فرم" class="ui right labeled icon button">
  <i class="redo alternate icon"></i>
  نوسازی
</button>
