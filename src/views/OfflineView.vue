<template>
  <div class="offline-view">
    <h1>Offline</h1>
    <h3>Unable to establish network connection</h3>
  </div>
</template>

<script>
export default {
  name: 'OfflineView',
  title: 'Offline',
};
</script>

<style lang="scss" scoped>
.offline-view {
  margin-top: 3rem;

  h1,
  h3 {
    text-align: center;
  }

  h3 {
    margin-top: 1rem;
  }
}
</style>
