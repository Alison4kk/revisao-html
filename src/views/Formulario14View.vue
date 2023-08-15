<template>
  <div>
    <h1>Minha 2º Pagina Web - Exercicio 2</h1>
    <h3>Alison, 1025880 e Turma dos Integrantes</h3>
    <hr>
    <p>LISTAS ANINHADAS MISTAS - 1</p>
    <hr>
    <ol>
      <li>
        <b>Aluno 1</b>
        <ul>
          <li><i>Home Page: http://www.aluno1.com.br</i></li>
          <li><i>E-mail: aluno1@singular.com.br</i></li>
        </ul>
      </li>
      <li>
        <b>Aluno 2</b>
        <ul class="style-circle">
          <li><i>Home Page: http://www.aluno2.com.br</i></li>
          <li><i>E-mail: aluno2@singular.com.br</i></li>
        </ul>
      </li>
    </ol>
    <hr>
    <p>LISTAS ANINHADAS MISTAS - 2</p>
    <hr>
    <ul>
      <li>
        <b>Disciplinas do 2º Ano de Informatica</b>
        <ol>
          <li><i>Fundamentos da Informatica</i></li>
          <li><i>Tecnicas de Computador Grafica</i></li>
          <li><i>Tecnicas Operacionais</i></li>
        </ol>
      </li>
      <li>
        <b>Disciplinas do 3º Ano de Informatica</b>
        <ol>
          <li><i>Linguagem Grafica de Programação</i></li>
          <li><i>Tecnicas de Programação</i></li>
          <li><i>Linguagem de Programacao</i></li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul.style-circle {
    list-style-type: circle;
  }
</style>