<script>
import axios from "axios";
export default {
  name: "RegisterPage",

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      showError: ["", "", "", ""], //name, email, phone, password
      validateSucc: [],
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push("/home");
    }
  },
  methods: {
    login() {
      this.$router.push({ name: "Login" });
    },
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
      });
      if (result.status === 200) {
        console.log("Signed Up Successfully");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push("/home");
      } else {
        console.warn("Signed Up Failed");
      }
    },
  },
};
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
    <pv-image src="src/assets/register-img.png" alt="Image" width="414" height="580"/>
    <div class="container">
      <h1 style="color: #5E8048; font-size: 40px">Registrarse</h1>
      <form @submit.prevent="signUp" class="register-form">
        <label for="names">Nombres:</label>
        <pv-field iconPosition="left">
          <pv-icon class="pi pi-user"></pv-icon>
          <pv-input id="names" v-model="name" placeholder="Ingresa tus nombres" required/>
        </pv-field>

        <label for="email">Email:</label>
        <pv-field iconPosition="left">
          <pv-icon class="pi pi-at"></pv-icon>
          <pv-input id="email" v-model="email" placeholder="Ingresa tu email" required/>
        </pv-field>

        <label for="phone">Nro. de teléfono:</label>
        <pv-field iconPosition="left">
          <pv-icon class="pi pi-phone"></pv-icon>
          <pv-input id="phone" v-model="phone" placeholder="Ingresa tu número de teléfono" required/>
        </pv-field>

        <label for="password">Contraseña:</label>
        <pv-field iconPosition="left">
          <pv-icon class="pi pi-lock"></pv-icon>
          <pv-input id="password" v-model="password" placeholder="Ingresa tu contraseña" required/>
        </pv-field>

        <pv-button class="submit-btn" type="submit" label="Registrarme"/>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 450px;
  text-align: center;
  color: #5E8048;
  border: solid 1px #267144;
  border-radius: 20px;
  padding: 50px 25px;
}

.register-form {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 30px;
}

label {
  color: #B08450;
  font-weight: 500;
  margin-top: 15px;
}

input {
  border-radius: 20px;
  height: 35px;
  width: 100%;
}

.submit-btn {
  margin-top: 30px;
  background-color: #267144;
  color: white;
  border-radius: 20px;
  border: none;
  font-weight: 500;
}

span {
  align-content: center;
}
</style>
