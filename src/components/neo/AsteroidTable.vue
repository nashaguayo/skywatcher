<template>
  <div class="asteroid-table">
    <div v-for="neo in neos" :key="neo.id" class="asteroid-item">
      <span>{{ neo.name }}</span>
      <FontAwesomeIcon
        v-if="neo.isPotentiallyHazardous"
        icon="fa-solid fa-skull"
        color="rgb(230, 230, 230)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsteroidTable',
  props: {
    neos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.asteroid-table {
}
</style>
