<script setup lang="ts">
import { ref } from "vue";

const arr = ref([
  { text: "All Category", isCurrent: true, id: Math.random() * 100 },
  { text: "Category 2", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 3", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 4", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 5", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 6", isCurrent: false, id: Math.random() * 100 },
]);
</script>

<template>
  <form
    class="max-w-[665px] basis-full flex justify-between items-center border-[1px] relative border-primary rounded-xl"
  >
    <input
      type="text"
      class="p-[10px] max-w-[420px] basis-full border-none rounded-xl body-default"
      placeholder="Search"
    />
    <ShopCategory
      class="max-w-[145px] border-primary border-l-[1px]"
      :arr="arr"
    />
    <BtnNormal class="rounded-l-none">Search</BtnNormal>
  </form>
</template>
