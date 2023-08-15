<template>
  <div>
    <form action="">
      <table>
        <tbody>
          <tr>
            <td>Usuario</td>
            <td><input type="text" name="usuario"></td>
          </tr>
          <tr>
            <td>Senha</td>
            <td><input type="password" name="senha"></td>
          </tr>
          <tr>
            <td colspan="2">
              <button type="submit">Submit</button>
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
</style>