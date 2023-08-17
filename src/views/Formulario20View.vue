<template>
  <div class="container">
    <head class="row">
      <div id="topo" class="d-flex justify-content-between mt-3">
        <h1>I ❤ Bolos</h1>
        <div class="d-flex gap-2 align-items-center">
          <a href="#" class="btn btn-light text-nowrap">Perguntas e Respostas </a>
          <a href="#" class="btn btn-light text-nowrap">Ajuda </a>
          <div class="input-group">
            <span class="input-group-text" id="pesquisar-icon">🔍</span>
            <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="pesquisar-icon">
          </div>
        </div>
      </div>
      <nav>
        <ul class="navbar">
          <a href="#" class="navbar-link"><li>Sobre</li></a>
          <a href="#" class="navbar-link"><li>Bolos</li></a>
          <a href="#" class="navbar-link"><li>Presentes</li></a>
          <a href="#" class="navbar-link"><li>Comprar</li></a>
          <a href="#" class="navbar-link"><li>Guia</li></a>
          <a href="#" class="navbar-link"><li>Blog</li></a>
        </ul>
      </nav>
    </head>
    <section>
      <div class="row">
        <div v-for="n in 12" :key="n" class="col-6 col-md-3 d-flex flex-column">
          <img src="https://source.unsplash.com/random/300x300" alt="Imagem Aleatorio">
          <div class="d-flex justify-content-between align-items-center color-gray">
            <small class="img-posted-at-label">a 37 minutos</small>
            <span>
              12
              <img width="13" class="img-fluid" src="https://fsymbols.com/images/heart.png">
            </span>
          </div>
          <span class="fw-bold">
            Titulo
          </span>
        </div>
      </div>
    </section>

    <div class="row">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>


<style lang="scss" scoped>
  .navbar {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .navbar-link:first-child {
      border-left: 0px;
    }

    .navbar-link {
      flex-grow: 1;
      padding: 0.5rem;
      background-color: #f8f8f8;
      border-left: 1px solid gray;
      text-align: center;
      &:hover {
        background-color: #bebebe;
      }
    }
  }
</style>