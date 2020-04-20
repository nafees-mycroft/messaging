<template>
  <div class="container min-vh-100">
    <div class="row justify-content-center">
      <div class="col col-lg-6 col-md-8 col-sm-10">
        <div class="py-5">
          <div class="card">
            <div class="card-header">{{ title }}</div>
            <div class="card-body">
              <slot></slot>
            </div>
            <div class="card-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppAuthForm'
})
export default class AuthForm extends Vue {
  @Prop({ required: true }) readonly title!: string
}
</script>
