<template>
  <div class="form-group">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="label"
      class="form-control"
      :value="value"
      @input="inputHandler"
    >
    <small
      v-if="feedback"
      :class="feedbackClasses"
    >{{ feedback }}</small>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { randomString } from '@/utils'

@Component({
  name: 'b-text'
})
export default class BText extends Vue {
    @Prop({ default: '' }) readonly label!: string
    @Prop({ default: 'text' }) readonly type!: string
    @Prop({
      default: () => randomString()
    }) readonly id!: string

    @Prop() readonly info!: string
    @Prop() readonly error!: string
    @Prop() readonly value!: (string | number)

    get feedback (): string {
      return this.error || (this.info || '')
    }

    get feedbackClasses (): string {
      return this.error ? 'form-text text-danger' : 'form-text text-muted'
    }

    public inputHandler (e: InputEvent): void {
      this.$emit('input', (e.target as HTMLInputElement).value)
    }
}
</script>
