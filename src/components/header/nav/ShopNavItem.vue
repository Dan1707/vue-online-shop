<script setup lang="ts">
defineProps({
  img: String,
  text: String,
});
</script>

<template>
  <a class="flex flex-col items-center gap-[7px]" href="" @click.prevent="">
    <img :src="img" />
    <p class="text-[12px] font-normal text-gray-500 leading-4">{{ text }}</p>
  </a>
</template>
