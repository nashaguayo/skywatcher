<template>
  <div class="apod-view">
    <DailyPicture />
  </div>
</template>

<script>
import DailyPicture from '@/components/apod/DailyPicture.vue';

export default {
  name: 'ApodView',
  title: 'Astronomy Picture of the Day',
  components: {
    DailyPicture,
  },
};
</script>
