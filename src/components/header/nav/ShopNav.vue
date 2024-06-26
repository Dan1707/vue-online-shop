<script setup lang="ts">
const navArr = [
  { img: "/src/assets/img/profile.svg", text: "Profile" },
  { img: "/src/assets/img/messege.svg", text: "Message" },
  { img: "/src/assets/img/orders.svg", text: "Orders" },
  { img: "/src/assets/img/my-cart.svg", text: "My cart" },
];
</script>

<template>
  <div class="max-w-[228px] basis-full flex justify-between items-center">
    <ShopNavItem v-for="nav in navArr" :img="nav.img" :text="nav.text" />
  </div>
</template>
