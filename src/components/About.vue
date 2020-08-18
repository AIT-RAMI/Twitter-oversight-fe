<template>
  <section id="bad-gateway">
    <div class="full">
      <img alt="logo" class="img-fluid logo" src="../assets/logo-to.png"/>
      <h1 class="h1-responsive mt-3 mb-2">About Us</h1>
      <h4>ABOUUUUTT</h4>
    </div>
  </section>
</template>

<script>
import {  } from 'mdbvue'

export default {
  name: 'About',
  components: {

  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width:auto; 
  padding-left:220px; 
  padding-right:220px;
}
h2 {
  padding-bottom: 15px;
}
.full {
  height: 70vh;
  text-align:center; 
}
.about {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
