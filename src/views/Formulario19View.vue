<template>
  <div class="container">
    <head class="row">
      <div class="col-1"></div>
      <div class="col-10 text-center">
        <h1 class="py-4">
          <img src="https://agil.ind.br/imagens/logo.png" alt="Logo da Agil Sistemas">
        </h1>
      </div>
      <div class="col-1 d-flex align-items-center gap-2">
        <a href="http://twitter.com">
          <img class="img-fluid redesocial-logo" src="https://img.freepik.com/icones-gratis/twitter_318-674515.jpg?w=100">
        </a>
        <a href="http://twitter.com">
          <img class="img-fluid redesocial-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png">
        </a>
      </div>
      <nav>
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Agil Cloud</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Agil Prime</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </head>
    <section>
      <div class="row">
        <div v-for="n in qtdMostrar" :key="n" class="col-6 col-md-3 d-flex flex-column">
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
      <div class="d-flex justify-content-center py-4">
        <button @click="mais" class="btn btn-primary px-5">Mais</button>
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
  },
  data() {
    const qtdMostrar = ref(12);
    return {
      qtdMostrar
    }
  },
  methods: {
    mais() {
      this.qtdMostrar += 12;
    }
  }
})
</script>


<style lang="scss" scoped>
  @import 'bootstrap/dist/css/bootstrap.min.css';

 nav {
   padding: 0px;
   border-top: 1px solid lightgray;
   border-bottom: 1px solid lightgray;
   margin-bottom: 15px;

   .nav-item:hover {
    background-color: #e9ecef;
   }
 }

 .redesocial-logo {
    width: 50px;
 }

 .color-gray {
   color: gray;
 }
</style>