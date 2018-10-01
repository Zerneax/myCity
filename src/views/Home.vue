<template>
  <div class="home">
    <p> test </p>
    <img alt="Vue logo" src="../assets/logo.png">
    <VLille/>
  </div>
</template>

<script>
// @ is an alias to /src
import VLille from '@/components/vlille/VLille.vue'

export default {
  name: 'home',
  components: {
    VLille
  }
}
</script>
