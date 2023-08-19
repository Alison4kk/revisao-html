<template>
  <div class="container py-5">
    <head class="row">
      <div id="topo" class="d-flex justify-content-between mt-3">
        <h1>I ❤ Bolos</h1>
        <div class="d-flex gap-2 align-items-center">
          <a href="#" class="btn btn-light text-nowrap"
            >Perguntas e Respostas
          </a>
          <a href="#" class="btn btn-light text-nowrap">Ajuda </a>
          <div class="input-group">
            <span class="input-group-text" id="pesquisar-icon">🔍</span>
            <input
              type="text"
              class="form-control"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
              aria-describedby="pesquisar-icon"
            />
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
        <aside class="col-12 col-md-3 d-flex flex-column gap-4">
          <div class="card">
            <div class="card-header">Acesso</div>
            <div class="card-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
                <label for="inputEmail" class="form-label">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="inputSenha"
                  placeholder="Senha"
                />
                <label for="inputSenha" class="form-label">Senha</label>
              </div>
              <div class="d-flex flex-column align-items-stretch gap-2">
                <a href="#" class="link-info">Perdeu sua senha?</a>
                <button class="btn btn-primary">Log In</button>
                <a href="#" class="link-danger">Sair?</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">Bolos</div>
            <div class="card-body">
              <ul>
                <li><a href="#" class="link-info"> Simples </a></li>
                <li><a href="#" class="link-info"> Chocolate </a></li>
                <li><a href="#" class="link-info"> Creme </a></li>
                <li><a href="#" class="link-info"> Frutas </a></li>
                <li><a href="#" class="link-info"> Baixa Caloria </a></li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Video</div>
            <div class="card-body">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/fzkBvsSupQI?si=SaHIceZ2A6l5dh6Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </aside>
        <div class="col-12 col-md-9">
          <div class="card">
            <div class="card-body">
              <div class="d-flex gap-2 align-items-center flex-wrap">
                <img
                  class="img-fluid flex-grow-1"
                  src="https://blogdamimis.com.br/wp-content/themes/mimis/assets/imgs/header/blog-da-mimis.png"
                  alt=""
                />
                <img
                  class="img-fluid"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxx5GvnTapizLwgsCHUoeFwrspKVnKnREjNg&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="card mt-2">
            <div class="card-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Novos
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" type="button" role="tab">
                    Ranking
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" type="button" role="tab">
                    Recomendados
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" type="button" role="tab">
                    Baixa Caloria
                  </button>
                </li>
              </ul>
              <div class="tab-content p-3" id="myTabContent">
                <div class="tab-pane fade show active">
                  <div class="row">
                    <div
                      v-for="n in 4"
                      :key="n"
                      class="col-6 col-md-3 d-flex flex-column"
                    >
                      <img
                        src="https://source.unsplash.com/random/300x300?cake"
                        alt="Imagem Aleatorio"
                      />
                      <div class="d-flex flex-column gap-2 color-gray">
                        <span class="fw-bold"> Bolo Pequeno </span>
                        <small>
                          R$ 1,59 <br />
                          277 calorias
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">Informações</div>
            <div class="card-body d-flex flex-column gap-3">
              <a href="#" class="link-dark">Janeiro 1, 2011. Informação</a>
              <a href="#" class="link-dark">Janeiro 1, 2011. Informação</a>
              <a href="#" class="link-dark">Janeiro 1, 2011. Informação</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
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