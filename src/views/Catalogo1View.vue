<template>
  <div>
    <table>
      <thead>
        <tr>
          <td class="black-header" colspan="3">
            Catálogo de Produtos - Desenvolvimento WEB I
          </td>
        </tr>
        <tr class="cabecalho">
          <td>Produtos</td>
          <td>Catalogos</td>
          <td>Preço</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">Faça Voçe Mesmo: Comida Japonesa</a></td>
          <td>DVD</td>
          <td>R$ 55,00</td>
        </tr>
        <tr>
          <td><a href="#">Faça Voçe Mesmo: Comida Japonesa</a></td>
          <td>DVD</td>
          <td>R$ 55,00</td>
        </tr>
        <tr>
          <td><a href="#">Faça Voçe Mesmo: Comida Japonesa</a></td>
          <td>DVD</td>
          <td>R$ 55,00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}

.black-header {
  background-color: black;
  color: white;
  padding: 10px 5px;
  font-size: 1.3rem;
}

.cabecalho {
  background-color: rgb(171, 171, 171);
  color: white;
}

table {
  border-spacing: 5px;
  border-collapse: separate;
}

table td {
  padding: 5px;
}

table tbody td,
table tbody a {
  background-color: rgb(236, 236, 236);
  color: rgb(120, 120, 120);
}
</style>
