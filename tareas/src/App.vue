<template >
  <div class="fondo">
    <!--Renderizamos aqui Navbar-->
    <NavBar />
    <TareaItem />

  </div>
</template>

<script>
//para renderizar, primero importamos Navbar y de donde y despues lo agregamos a la propiedad componentes y al final decirle donde queremos que lo renderice
import NavBar from './components/NavBar';
import TareaItem from './components/TareaItem';

export default {
  name: 'App',
  components: {
    NavBar,
    TareaItem

  }
}
</script>

<style>
.fondo {
  background-image: url('./assets/fondo.jpg');
  height: 100vh;  /*Para que ocupe toda la pantalla*/
}
</style>
