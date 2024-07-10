<script setup lang="ts">
const arr = [
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
  {
    text: "T-shirts with multiple colors, for men",
    price: 30,
    img: "/src/assets/img/t-shirt.png",
  },
];
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
