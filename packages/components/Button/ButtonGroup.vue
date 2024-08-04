<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import type { ButtonGroupProps } from './type';
import { BUTTON_GROUP_CTX_KEY } from "./constants";

defineOptions({
  name: 'GButtonGroup'
})
const props = defineProps<ButtonGroupProps>()
provide(BUTTON_GROUP_CTX_KEY, reactive({
  size: toRef(props, "size"),
  type: toRef(props, "type"),
  disabled: toRef(props, "disabled"),
}))
</script>


<template>
  <div class="gui-button-group">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
@import './styles.css';
</style>