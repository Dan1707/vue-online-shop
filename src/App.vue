<script setup lang="ts">
const arr = [
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
  { title: "Soft chairs", price: 19, img: "/src/assets/img/block-item-1.png" },
];

const arr2 = [
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
  { title: "Smart watches", price: 19, img: "/src/assets/img/card-sale-1.png" },
];
</script>

<template>
  <ShopHeader />
  <ShopHero />
  <ShopSale />
  <ShopItemsBlock
    :itemArr="arr"
    blockImg="/src/assets/img/item-block-1.jpeg"
    blockTitle="Home and outdoor"
  />
  <ShopItemsBlock
    :itemArr="arr2"
    blockImg="/src/assets/img/item-block-2.jpeg"
    blockTitle="Consumer electronics and gadgets"
  />
  <ShopRecommend />
</template>
