<template>
  <div>
    <table>
      <thead>
        <tr>
          <td colspan="4">Tabela Mesclada</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td width="10%" align="left" bgcolor="yellow" rowspan="2" >A1</td>
        <td width="40%" height="40px" align="center" valign="bottom" bgcolor="white" >A2</td>
        <td colspan="2" width="50%" align="center" valign="top" bgcolor="orange">A3</td>
      </tr>
      <tr>
        <td colspan="2" width="40%" height="50px" align="center" valign="center" bgcolor="orange">B2</td>
        <td rowspan="2" width="30%" align="center" valign="top" bgcolor="yellow">B4</td>
      </tr>
      <tr>
        <td colspan="3" width="10%" align="right" bgcolor="orange">C1</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  table {
    border: 3px solid blue;
    width: 100%;
    background: red;
  }



</style>