<template>
  <div>
    <form action="">
      <table>
        <tbody>
          <tr>
            <td>Usuario</td>
            <td><input type="text" name="usuario" /></td>
            <td>Senha</td>
            <td><input type="password" name="senha" /></td>
            <td><button type="submit">Submit</button></td>
          </tr>
          <tr>
            <td class="lembrar-usuario-senha" colspan="5">
              <input id="inputLembrarSenha" type="checkbox">
              <label for="inputLembrarSenha">Lembrar Usuario e Senha</label>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<style scoped>
table {
  border: 1px solid black;
}
td {
  padding: 5px;
  border: 1px solid black;
}

.lembrar-usuario-senha {
  text-align: left;
}
</style>