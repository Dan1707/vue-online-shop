<script setup lang="ts">
const arr = [
  {
    title: "Smart watches",
    img: "/src/assets/img/card-sale-1.png",
    discount: 25,
  },
  {
    title: "Laptops",
    img: "/src/assets/img/card-sale-2.png",
    discount: 15,
  },
  {
    title: "GoPro cameras",
    img: "/src/assets/img/card-sale-3.png",
    discount: 40,
  },
  {
    title: "Headphones",
    img: "/src/assets/img/card-sale-4.png",
    discount: 25,
  },
  {
    title: "Canon camreras",
    img: "/src/assets/img/card-sale-5.png",
    discount: 25,
  },
];
</script>

<template>
  <section class="mt-[30px]">
    <div
      class="container sale border-container p-[0] tablets:border-[0] tablets:max-w-full"
    >
      <ShopTime class="tablet:time" />
      <div
        class="flex-between w-full h-full tablet:items tablets:overflow-hidden"
      >
        <ShopSaleItem v-for="item in arr" :key="arr" :item="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.time {
  grid-area: time;
}

.sale {
  display: grid;
  grid-template-columns: 1.5fr 5fr;
  justify-content: space-between;
  align-items: center;
}

.items {
  grid-area: items;
}

@media (max-width: 908px) {
  .sale {
    grid-template-columns: 1fr;
    grid-template-rows: fit-content 1fr;
    grid-template-areas:
      "time"
      "items";
  }
}
</style>
