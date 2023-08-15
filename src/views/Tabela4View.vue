<template>
  <div>
    <table>
      <thead>
        <tr>
          <td colspan="3">
            Titulo da tabela
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>coluna 1-0</td>
          <td colspan="2">coluna que ocupa espaço de 2 colunas</td>
        </tr>
        <tr>
          <td>coluna 2-0</td>
          <td>coluna2-1</td>
          <td>coluna2-2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  table {
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
  }
</style>
