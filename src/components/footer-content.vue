<template>
  <footer class="footer">
    <div class="left-section">
      <p>Diviértete en el mundo de la hidroponía con nosotros</p>
      <a href="https://www.facebook.com" class="social-link"><i class="fab fa-facebook"></i></a>
      <a href="https://www.twitter.com" class="social-link"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com" class="social-link"><i class="fab fa-instagram"></i></a>
      <p class="copyright">&copy; AgriSage 2024. Todos los derechos reservados</p>
    </div>
    <div class="right-section">
      <div class="column">
        <h4 class="text-center company">Company</h4>
        <ul class="list-unstyled left-align small-text">
          <li>About</li>
          <li>Careers</li>
          <li>Logistic</li>
          <li>Privicy & Policy</li>
        </ul>
      </div>
      <div class="column">
        <h4 class="text-center contact">Contact</h4>
        <ul class="list-unstyled left-align small-text">
          <li>Help/FAQ</li>
          <li>Press</li>
          <li>Affiliates</li>
        </ul>
      </div>
      <div class="column">
        <h4 class="text-center more">More</h4>
        <ul class="list-unstyled left-align small-text">
          <li>Press Centre</li>
          <li>Our Blog</li>
          <li>Low fare tips</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>


.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #000;
  padding: 10px 20px;
  margin-top: 350px;
}

.left-section {
  margin-right: 20px;
}

.right-section {
  display: flex;
  gap: 7px; /* Espacio entre las columnas */
  margin-left: 250px;
}

.column {
  flex: 1; /* Las columnas ocupan el mismo espacio */
}

.right-section a {
  color: #378D35;
  margin-left: 10px;
}

.right-section a:hover {
  color: #ccc;
}

/* Eliminar los puntos de lista */
.list-unstyled {
  list-style: none;
}

/* Estilos para centrar el texto */
.text-center {
  text-align: center;
}

.social-link {
  color: #378D35; /* Cambiar el color de los enlaces a #378D35 */
  margin-left: 10px;
}

.copyright {
  color: #5E8048; /* Cambiar el color del texto a #5E8048 */
}

.company {
  color: #5E8048; /* Cambiar el color del texto a #5E8048 */
}

/* Estilos para el texto de Contact */
.contact {
  color: #5E8048; /* Cambiar el color del texto a #5E8048 */
}

/* Estilos para el texto de More */
.more {
  color: #5E8048; /* Cambiar el color del texto a #5E8048 */
}

.left-align {
  text-align: left;
}

.small-text li {
  font-size: 0.8em;
  white-space: nowrap;
}


</style>

<script setup lang="ts">
</script>
