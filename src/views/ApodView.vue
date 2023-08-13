<template>
  <div class="apod-view">
    <ApodContainer />
  </div>
</template>

<script>
import ApodContainer from '@/components/apod/ApodContainer.vue';

export default {
  name: 'ApodView',
  title: 'Astronomy Picture of the Day',
  components: {
    ApodContainer,
  },
};
</script>

<style lang="scss" scoped>
.apod-view {
  height: 100%;
}
</style>
