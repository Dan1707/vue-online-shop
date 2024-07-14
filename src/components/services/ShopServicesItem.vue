<script setup lang="ts">
defineProps({
  el: Object,
});
</script>

<template>
  <div class="w-full bg-light border-container p-0 overflow-hidden">
    <div class="w-full overflow-hidden h-[120px] brightness-[.65]">
      <img :src="el?.img" class="w-full" />
    </div>
    <div class="p-5 relative">
      <p class="body-default text-dark font-semibold max-w-[165px]">
        {{ el?.title }}
      </p>
      <div
        class="w-[55px] h-[55px] p-4 bg-primary-light rounded-full border-[2px] border-light overflow-hidden absolute z-[90] bottom-0 right-0 mr-5 mb-[53px]"
      >
        <img :src="el?.ico" class="w-full" />
      </div>
    </div>
  </div>
</template>
