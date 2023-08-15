<template>
  <div>
    <form action="">
      <label for="inputNome"
        >Nome: <input type="text" name="nome" id="inputNome"
      /></label>
      <label for="inputSexo"
        >Sexo: <input type="radio" name="sexo" value="M" id="inputSexoM" />
        <label for="inputSexoM">M</label>
        <input type="radio" name="sexo" value="F" id="inputSexoF" />
        <label for="inputSexoF">F</label>
      </label>
      <label for="inputEstadoCivil"
        >Estado Civil
        <select name="estadoCivil" id="inputEstadoCivil">
          <option value="S">Solteiro</option>
          <option value="C">Casado</option>
          <option value="O">Outros</option>
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
  form {
    border: 1px dotted red;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
</style>