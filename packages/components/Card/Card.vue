<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import type { CardProps } from './type'

defineOptions({
  name: 'GCard'
})

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'never'
})

const slots = useSlots()

const hasShowHeader = computed(() => slots.header || props.header)

const hasShowFotter = computed(() => slots.footer || props.footer)

</script>

<template>

  <div class="gui-card" :class="{
    [`is-${shadow}-shadow`]: shadow
  }">

    <div class="gui-card-header" v-if="hasShowHeader">

      <slot v-if="$slots.header" name="header" />
      <template v-else> {{ header }} </template>

    </div>

    <div class="gui-card-body">

      <slot />

    </div>

    <div class="gui-card-footer" v-if="hasShowFotter">

      <slot v-if="$slots.footer" name="footer" />
      <template v-else> {{ footer }} </template>

    </div>

  </div>

</template>

<style lang="css" scoped>
@import './style.css';
</style>