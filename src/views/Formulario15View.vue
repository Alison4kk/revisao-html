<template>
  <div>
    <h3>Alison, 1025880 e Turma dos Integrantes</h3>
    <hr>
    <div class="d-flex flex-column gap-05">
      <div class="d-flex align-top gap-05">
        <img src="@/assets/fireworks.gif" width="200">
        <span>Esta figura está no formato GIF, alinhada pelo TOPO.</span>
      </div>
      <div class="d-flex align-center gap-05">
        <img src="@/assets/youtube.jpg" width="200">
        <span>Esta figura está no formato GIF, alinhada pelo MEIO.</span>
      </div>
      <div class="d-flex align-bottom gap-05">
        <img src="@/assets/natureza.png" width="200">
        <span>Esta figura está no formato GIF, alinhada pelo BASE.</span>
      </div>
      <div class="d-flex align-bottom gap-05">
        <a target="_blank" href="https://google.com">
          <img  src="@/assets/google.png" width="100">
        </a>
        <span>Esta figura é um link, e teve seu comprimento alterado para 100px.</span>
      </div>
      <div class="d-flex align-bottom gap-05">
        <a target="_blank" href="https://google.com">
          <img  src="@/assets/google.png" width="50">
        </a>
        <span>Esta figura é um link, e teve seu comprimento alterado para 100px.</span>
      </div>
      <p>Obs: Repare que, alterando uma medida apenas, a outra se ajusta proporcionalmente.</p>
    </div>

  </div>
</template>

<style scoped>
  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .align-top {
    align-items: top;
  }

  .align-center {
    align-items: center;
  }

    .align-bottom {
    align-items: baseline;
  }


  .gap-05 {
    gap: 0.5rem;
  }
</style>