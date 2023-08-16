<template>
  <div>
    <p>Bem vindo ao trabalho, navegue usando os links abaixo:</p>
    <nav>
      <router-link to="/0-catalogo">0 - Catalogo de Produtos</router-link>
      <router-link to="/1-titulos">1 - Titulo</router-link>
      <router-link to="/2-fomratos-texto">2 - Formatos Texto</router-link>
      <router-link to="/3-itens-formatados">3 - Itens Formatados</router-link>
      <router-link to="/4-tabela">4 - Tabela</router-link>
      <info-box label="5 - Desenho da Tabela">
        <img src="@/assets/desenho-6.png" alt="">
      </info-box>
      <info-box label="6 - Desenho da Tabela 2">
        <img src="@/assets/desenho-5.png" alt="">
      </info-box>
      <info-box label="7 - Descrever o HTML">
          Uma pagina html contendo 2 paragrafos: <br>
          <ul>
            <li>Primeiro paragrafo tem dois links, um para index.php e outro para o google.com</li>
            <li>O segundo paragrafo tem um link para o Yahoo.com</li>
          </ul>


      </info-box>
      <router-link to="/8-formulario">8 - Formulario</router-link>
      <router-link to="/9-login">9 - Formulario Login</router-link>
      <router-link to="/10-login">10 - Formulario Login 2</router-link>
      <info-box label="11 - Desenho da Tabela 2">
        <img style="width: 100%" src="@/assets/desenho-11.png" alt="">
      </info-box>
      <router-link to="/11-pagina">12 - Minha primeira Pagina WEB</router-link>
      <router-link to="/13-pagina">13 - Minha segunda Pagina WEB</router-link>
      <router-link to="/14-pagina">14 - Minha terceira Pagina WEB</router-link>
      <router-link to="/15-pagina">15 - Figuras</router-link>
      <router-link to="/16-pagina">16 - Arrumar HTML</router-link>

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

