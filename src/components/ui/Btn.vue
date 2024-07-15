<script setup lang="ts">
defineProps({
  size: String,
  color: String,
  icoPosition: String,
  ico: String,
  group: String,
});
</script>

<template>
  <button
    class="text-center font-medium rounded-md duration-300 flex-between gap-[15px]"
    :class="{
      'px-2.5 text-sm py-2': size === 'sm',
      'px-4 text-base py-3': size === 'md',
      'px-5 text-lg py-4 rounded-lg': size === 'lg',
      'bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-light hover:brightness-110':
        color === 'primary',
      'bg-light text-primary border hover:brightness-95':
        color === 'primary-light',
      'bg-light text-dark border hover:brightness-95 font-semibold':
        color === 'light',
      'rounded-r-none': group === 'left',
      'rounded-r-none rounded-l-none': group === 'center',
      'rounded-l-none': group === 'right',
    }"
  >
    <div v-if="icoPosition === 'left'">
      <img :src="ico" />
    </div>
    <slot></slot>
    <div v-if="icoPosition === 'right'">
      <img :src="ico" />
    </div>
  </button>
</template>
