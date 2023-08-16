<template>
  <code-mirror v-model="value" :lang="lang">

  </code-mirror>



</template>

<script>
import { ref, defineComponent } from 'vue';

import { html } from '@codemirror/lang-html';

import CodeMirror from 'vue-codemirror6';

export default defineComponent({
  components: {
    CodeMirror,
  },
  setup() {
    const lang = html();

    const value = ref('<div>hello world</div>');
    // value.value = require('@/assets/teste.json');

    fetch('assets/html-pagina-16.html')
      .then((response) => response.text())
      .then((text) => {
        value.value = text
      });


    return { lang, value };
  },
});
</script>