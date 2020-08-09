<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('test')
    axios.get('test.php')
      .then(function (response) {
         console.log('response:', response)
      })
      .catch(function (error) {
         console.log(error);
      });
  }
}
</script>
