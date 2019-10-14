<template>
  <div class="control">
    <label>
      <slot />
    </label>
    <textarea ref="textarea" :value="value" @input="$emit('input', $event.target.value)"></textarea>
    <!-- <textarea ref="textarea" :value="value" @input="onInput()"></textarea> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "82"
    }
  },
  watch: {
    value() {
      this.textareaResize();
    }
  },
  methods: {
    textareaResize() {
      if (this.value.length == 0)
        this.$refs.textarea.style.height = `${this.height}px`;
      else
        this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    }
  },
  mounted() {
    this.textareaResize();
  }
};
</script>


<style lang="scss" scoped>
textarea {
  overflow: hidden;
  height: 82px;
}
</style>