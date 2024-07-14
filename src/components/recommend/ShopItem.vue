<script setup lang="ts">
defineProps({
  el: Object,
});
</script>

<template>
  <div
    class="w-full bg-light border-gray-200 border-[2px] rounded-md flex flex-col items-center pb-[10px]"
  >
    <div class="w-full overflow-hidden">
      <img :src="el?.images[0]" class="w-full" />
    </div>
    <div class="mt-[30px] w-full px-4 flex flex-col gap-1">
      <p class="body-default text-dark font-semibold">${{ el?.price }}</p>
      <p class="body-default-muted">{{ el?.title }}</p>
    </div>
  </div>
</template>
