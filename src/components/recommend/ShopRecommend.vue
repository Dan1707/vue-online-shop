<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

const arr = ref<object[]>([]);

const getRecProducts = async () => {
  try {
    const res = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=10&limit=10"
    );

    const data = await res.data;

    arr.value = [...data];
  } catch (error) {
    console.log(`ShopRecommend: ${error}`);
  }
};

onMounted(() => {
  getRecProducts();
});
</script>

<template>
  <section class="mt-[30px]">
    <div class="container bg-transparent">
      <h3>Recommended items</h3>
      <div
        class="grid grid-cols-5 gap-5 mt-[30px] laptop:grid-cols-4 recommend tablet:gap-2 phonel:grid-cols-1"
      >
        <ShopItem v-for="el in arr" :key="el" :el="el" />
      </div>
    </div>
  </section>
</template>

<style>
@media (max-width: 576px) {
  .recommend {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style>
