<template>
  <div class="base-radio">
    <label :for="value">
      {{ label }}
    </label>
    <input
      type="radio"
      :name="name"
      :id="value"
      :value="value"
      v-model="inputValue"
    />
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
}
</style>
