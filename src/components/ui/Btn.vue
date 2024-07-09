<script setup lang="ts">
defineProps({
  size: String,
  color: String,
  ico: String,
});
</script>

<template>
  <button
    class="text-center font-medium rounded-md duration-300 flex-between gap-[15px]"
    :class="{
      'px-2.5 text-sm py-2': size === 'sm',
      'px-4 text-base py-3': size === 'md',
      'px-5 text-lg py-4 rounded-lg ': size === 'lg',
      'bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-light hover:brightness-110':
        color === 'primary',
      'bg-light text-primary border hover:brightness-95':
        color === 'primary-light',
      'bg-light text-dark border hover:brightness-95 font-semibold':
        color === 'light',
    }"
  >
    <div v-if="ico === 'left'">
      <slot name="ico"></slot>
    </div>
    <slot></slot>
    <div v-if="ico === 'right'">
      <slot name="ico"></slot>
    </div>
  </button>
</template>
