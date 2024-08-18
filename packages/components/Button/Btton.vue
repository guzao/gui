<script lang="ts" setup>
import { throttle } from 'lodash-es';
import { computed, ref, inject } from 'vue'
import { BUTTON_GROUP_CTX_KEY } from './constants'
import type { ButtonEmits, ButtonProps, ButtonInstance } from './type'

defineOptions({
  name: 'GButton',
})

const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0)

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: 'button',
  useThrottle: false,
  throttleDuration: 500,
})

const slots = defineSlots();

const emits = defineEmits<ButtonEmits>();

const _ref = ref<HTMLButtonElement>();

const size = computed(() => buttonGroupCtx?.size ?? props.size ?? '')

const type = computed(() => buttonGroupCtx?.type ?? props.type ?? '')

const disabled = computed(() => props.disabled || buttonGroupCtx?.disabled || false)

const handleBtnClick = (event: MouseEvent) => emits('click', event)

const handlBtneCLickThrottle = throttle(handleBtnClick, props.throttleDuration)


defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
})

</script>

<template>
  <component :is="tag" ref="_ref" class="gui-button" :class="{
    [`gui-button--${type}`]: type,
    [`gui-button--${size}`]: size,
    'is-plain': plain,
    'is-circle': circle,
    'is-round': round,
    'is-disabled': disabled,
    'is-loading': loading,
  }" :disabled="disabled || loading ? true : void 0" :type="tag === 'button' ? nativeType : void 0"
    :autofocus="autofocus"
    @click="(event: MouseEvent) => useThrottle ? handlBtneCLickThrottle(event) : handleBtnClick(event)">

    <slot />

  </component>
</template>

<style lang="css" scoped>
@import './styles.css';
</style>