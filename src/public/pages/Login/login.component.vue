<script>
import { AuthApiService } from "../../services/auth.services";
import { useRoute } from "vue-router";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      auth : new AuthApiService(),
      router: useRoute()
    };
  },
  methods: {
    async login() {
/*       let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      ); */

      let result = await this.auth.login(this.email, this.password);
      console.log("user clicked in login", this.email, this.password);
      console.log(result);
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        console.log("user logged in");
        this.router.redirectedTo("/");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.router.redirectedTo("/");
    }
  },
};
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <div class="container">
      <h1 style="color: #5E8048; font-size: 40px">Iniciar Sesión</h1>
      <form @submit.prevent="login" class="login-form">
        <label for="email">Email:</label>
        <pv-field iconPosition="left">
          <pv-icon class="pi pi-at"> </pv-icon>
          <pv-input id="email" v-model="email" placeholder="Ingresa tu email" required />
        </pv-field>

        <label for="password">Contraseña:</label>
        <pv-field iconPosition="left">
          <pv-icon class="pi pi-lock"> </pv-icon>
          <pv-input id="password" v-model="password" placeholder="Ingresa tu contraseña" required />
        </pv-field>

        <pv-button class="btn-login" type="submit" label="Ingresar"/>
      </form>
      <pv-button type="submit" label="Sign in with Google" class="google-btn" />
      <br>
      <label class="register-lbl">
        ¿No tienes una cuenta?
        <router-link to="/register">Registrate</router-link>
      </label>
    </div>
    <pv-image src="src/assets/login-img.png" alt="Image" width="611"/>
  </div>
</template>

<style scoped>
.p-component * {
  border-radius: 10px;
}
.container {
  width: 450px;
  text-align: center;
  color: #5E8048;
  border: solid 1px #267144;
  border-radius: 20px;
  padding: 50px 25px;
}
.login-form {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 75px;
}
label {
  color: #B08450;
}
input {
  border-radius: 20px;
  height: 35px;
  width: 100%;
}
button  {
  margin-top: 20px;
}
.google-btn {
  background: white;
  color: #344054;
  border: 1px solid #31486D;
  width: 80%;
  align-self: center;
  margin-bottom: 20px;
}
.register-lbl {
  font-size: 14px;
  color: #344054;
}
.register-lbl a {
  color: #198754;
  font-weight: 500;
  cursor: pointer;
}
.btn-login {
  background-color: #267144;
  color: white;
  border-radius: 20px;
  border: none;
  font-weight: 500;
}
</style>
