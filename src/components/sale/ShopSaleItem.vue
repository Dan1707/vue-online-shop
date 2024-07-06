<script setup lang="ts">
defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="flex flex-col gap-[12px] items-center max-w-full border p-[20px] tablets:p-[15px] border-t-0 border-b-0 tablet:border-t-[1px] border-gray-200 basis-full justify-between h-full"
  >
    <img :src="item?.img" alt="" />
    <div class="flex flex-col gap-[12px] items-center">
      <p
        class="body-default text-dark mt-[11px] tablets:body-small text-center"
      >
        {{ item?.title }}
      </p>
      <span
        class="py-[8px] px-[13px] bg-[#FFE3E3] text-[#EB001B] rounded-[29px] body-small font-medium"
      >
        -{{ item?.discount }}%
      </span>
    </div>
  </div>
</template>
