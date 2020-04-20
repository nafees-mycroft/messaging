<template>
  <app-auth-form title="Signup">
    <b-text label="Username"></b-text>
    <b-text label="Email"></b-text>
    <b-text label="Password"></b-text>
    <template v-slot:footer>
      <b-btn>Signup</b-btn>
    </template>
  </app-auth-form>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppAuthForm from '@/components/auth/AppAuthForm.vue'
import BText from '@/components/inputs/Btext.vue'
import BBtn from '@/components/buttons/BBtn.vue'
@Component({
  components: { BBtn, BText, AppAuthForm }
})
export default class Signup extends Vue {

}
</script>
