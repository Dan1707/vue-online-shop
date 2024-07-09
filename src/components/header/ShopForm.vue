<script setup lang="ts">
import { ref } from "vue";

const arr = ref([
  { text: "All Category", isCurrent: true },
  { text: "Category 2", isCurrent: false },
  { text: "Category 3", isCurrent: false },
  { text: "Category 4", isCurrent: false },
  { text: "Category 5", isCurrent: false },
  { text: "Category 6", isCurrent: false },
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
    <button
      class="rounded-l-none px-[23px] py-[10px] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-[16px] text-light text-center font-medium rounded-lg"
    >
      Search
    </button>
  </form>
</template>
