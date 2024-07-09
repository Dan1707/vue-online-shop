<script setup lang="ts">
defineProps({
  el: Object,
});
</script>

<template>
  <div class="flex justify-between tablets:hidden bg-light h-[127px]">
    <div class="m-[20px]">
      <p class="body-default text-dark">{{ el?.title }}</p>
      <p class="body-small-muted max-w-[66px] mt-[9px]">
        From USD {{ el?.price }}
      </p>
    </div>
    <div class="max-w-[90px] p-[10px] overflow-hidden self-end">
      <img :src="el?.img" class="w-full h-full" />
    </div>
  </div>
  <div class="hidden tablets:block">
    <div
      class="flex flex-col items-center bg-light w-[140px] py-[15px] px-[20px]"
    >
      <div class="overflow-hidden max-w-[85px]">
        <img :src="el?.img" class="w-full" />
      </div>
      <div class="mt-[9px] flex flex-col gap-1 items-center">
        <p class="body-small text-dark">
          {{ el?.title }}
        </p>
        <p class="body-small-muted">From USD {{ el?.price }}</p>
      </div>
    </div>
  </div>
</template>
