<template>
  <div class="base-input">
    <label for="search" v-if="label">
      {{ label }}
    </label>
    <input
      v-if="lazy"
      :type="type"
      id="search"
      :name="name"
      :placeholder="placeholder"
      v-model.lazy="inputValue"
      ref="input"
      :disabled="disabled"
      :max="max"
    />
    <input
      v-else
      :type="type"
      id="search"
      :name="name"
      :placeholder="placeholder"
      v-model="inputValue"
      ref="input"
      :disabled="disabled"
      :max="max"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'type here',
    },
    model: {
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    reset: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    max: {
      type: String,
      default: '',
    },
  },
  watch: {
    reset(reset) {
      if (reset) {
        this.$refs['input'].value = '';
        this.$emit('inputValueChanged', '');
      }
    },
    focus(focus) {
      if (focus) {
        this.$refs['input'].focus();
        this.$emit('focused');
      }
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
.base-input {
}
</style>
