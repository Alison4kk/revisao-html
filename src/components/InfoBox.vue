<template>
<div>
  <a href="#" @click="showBox">{{label}}</a>
  <div class="content">
    <slot>

    </slot>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['label'],
  setup() {
    return {}
  },
  methods: {
    showBox() {
      let oHtml = this.$el.querySelector('.content')?.innerHTML;
      this.$swal({
        title: this.label,
        html: oHtml,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Fechar',
        confirmButtonAriaLabel: 'Fechar',
      })
    }
  }
})
</script>

<style scoped>
  .content {
    display: none;
  }
</style>
