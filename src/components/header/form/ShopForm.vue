<script setup lang="ts"></script>

<template>
  <form
    class="max-w-[665px] basis-full flex justify-between items-center border-[1px] border-primary rounded-xl overflow-hidden"
  >
    <input
      type="text"
      class="p-[10px] max-w-[420px] basis-full text-[16px] font-medium leading-6"
      placeholder="Search"
    />
    <ShopCategory />
    <BtnNormal class="rounded-l-none">Search</BtnNormal>
  </form>
</template>
