<template>
  <signup></signup>
<!--  <login></login>-->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

@Component({
  components: { Signup, Login }
})
export default class App extends Vue {
}
</script>
<style lang="scss">
  @import "~bootstrap/dist/css/bootstrap.min.css";
</style>
