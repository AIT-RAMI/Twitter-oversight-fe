<template>
  <section id="about">
    <div class="full">
      <img alt="logo" class="img-fluid logo" src="../assets/logo-to.png"/>
      <h1 class="h1-responsive mt-3 mb-2">About Us</h1>
      <br>
      <p style="font-size:120%">At TwitterOversight, we believe there is a better way to saty in touch with what's happening now in the topics that interests you. We're obsessively passionate about it, and our mission is to help you achieve it by providing top tweets in those topics and analyzing their sentiments.</p>
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
  padding-left:30%; 
  padding-right:30%;
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
