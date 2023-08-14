<template>
  <div>
    <p>Bem vindo ao trabalho, navegue usando os links abaixo:</p>
    <nav>
      <router-link to="/0-catalogo">0 - Catalogo de Produtos</router-link>
      <router-link to="/1-titulos">1 - Titulo</router-link>
      <router-link to="/2-fomratos-texto">2 - Formatos Texto</router-link>
      <router-link to="/3-itens-formatados">3 - Itens Formatados</router-link>
      <info-box label="7 - Descrever o HTML">
          Uma pagina html contendo 2 paragrafos: <br>
          <ul>
            <li>Primeiro paragrafo tem dois links, um para index.php e outro para o google.com</li>
            <li>O segundo paragrafo tem um link para o Yahoo.com</li>
          </ul>


      </info-box>
      <router-link to="/8-formulario">8 - Formulario</router-link>

    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  methods: {

  }
})
</script>

