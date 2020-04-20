<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'BBtn'
})
export default class BBtn extends Vue {
  @Prop({ default: 'secondary' }) readonly variant!: string
  @Prop({ default: 'secondary' }) readonly innerHtml!: string
  @Prop({
    default: 'md',
    validator (value: string): boolean {
      return ['lg', 'md', 'sm'].indexOf(value) !== -1
    }
  }) readonly size!: string

  get classes (): string {
    return `btn btn-${this.variant} btn-${this.size}`
  }
}
</script>
