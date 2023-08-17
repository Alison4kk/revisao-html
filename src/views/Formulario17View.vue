<template>
  <div>
    <h1 class="text-center">Listas, Links e Âncoras</h1>
    <hr>
    <h3 class="text-center">Nome dos Integrantes</h3>
    <hr>
    <ol>
      <li>
        <u><b>Nome Completo do Aluno 1</b></u>
      </li>
      <li>
        <u><b>Nome Completo do Aluno 2</b></u>
      </li>
      <li>
        <u><b>Nome Completo do Aluno 3</b></u>
      </li>
    </ol>
    <hr>
    <h3 class="text-center">Dados Pessoais</h3>
    <hr>
    <ol>
      <li>
        <b>Apelido do Aluno 1</b>
        <ul>
          <li>Endereço:</li>
          <li>Data de Nascimento:</li>
          <li>Descrição Fisica:</li>
          <li>Passatempos:</li>
          <li>Enviar <i><u>E-mail</u></i> para mim</li>
        </ul>
        <a href="#"><u>Voltar ao topo</u></a>
      </li>
      <li>
        <b>Apelido do Aluno 2</b>
        <ul>
          <li>Endereço:</li>
          <li>Data de Nascimento:</li>
          <li>Descrição Fisica:</li>
          <li>Passatempos:</li>
          <li>Enviar <i><u>E-mail</u></i> para mim</li>
        </ul>
        <a href="#"><u>Voltar ao topo</u></a>
      </li>
      <li>
        <b>Apelido do Aluno 3</b>
        <ul>
          <li>Endereço:</li>
          <li>Data de Nascimento:</li>
          <li>Descrição Fisica:</li>
          <li>Passatempos:</li>
          <li>Enviar <i><u>E-mail</u></i> para mim</li>
        </ul>
        <a href="#"><u>Voltar ao topo</u></a>
      </li>
    </ol>
  </div>
</template>

<style scoped>
  ul.style-circle {
    list-style-type: circle;
  }

  li {
    margin: 10px 0;
  }

  .text-center {
    text-align: center;
  }

  ul {
    list-style-type: disc;
  }

  ul > li {
    font-style: italic;
  }

  a {
    color: black;
  }
</style>