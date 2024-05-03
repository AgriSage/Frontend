<script>
export default {
  name: "HomePage"
}
</script>
<template>
  <h2 style="color:#718F53; text-align:end; width:90%">
    Tu perfil:
  </h2>

  <section>
    <div class="InformationBox">
      <div style="text-align:end;width: 95%">
        <img
           src="./profile.png"
           alt="profileImage"
           width="150"
           height="150"
           style="border-radius: 50%"
        />
      </div>
      <div style="color: black;text-align: start;">
        <br>Nombre: Diego
        <br>Correo electronico: diego@grisage.com
        <br><br><br>Plan:
        <span>
          <a href="#">
          Premium
          </a>
        </span>
      </div>
    </div>
    <div class="BottonBox">
      <button class="button">
        Cambiar contraseña
      </button>
      <button class="button">
        Actualizar información
      </button>
      <button class="button">
        Cambiar Plan
      </button>
    </div>
  </section>
</template>

<style>
h1 {
  color: #000; /* Color negro */
}
.InformationBox {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 80px 50px;
}
a{
  text-decoration: none;
  outline: none;
  color:#98AA82;
}

a:visited {
  color: #437a16;
}

a:hover {
  border-bottom: 1px solid;
}

.BottonBox{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 80px 25px;
  gap: 40px;
}
.button{
  color: black;
  background-color: #98AA82;
}
</style>