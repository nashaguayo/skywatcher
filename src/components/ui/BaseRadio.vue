<template>
  <div class="base-radio">
    <input
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      v-model="inputValue"
    />
    <label :for="value">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseRadio',
  props: {
    model: {
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('inputValueChanged', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.base-radio {
  background-color: var(--variant-background-color);
  margin: 0.2rem;
  padding: 0.4rem;

  label {
    color: var(--main-text-color);
    font-family: 'Roboto Condensed';
  }
}
</style>
