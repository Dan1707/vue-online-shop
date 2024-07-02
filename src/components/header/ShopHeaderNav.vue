<script setup lang="ts">
const navArr = [
  { img: "/src/assets/img/profile.svg", text: "Profile" },
  { img: "/src/assets/img/messege.svg", text: "Message" },
  { img: "/src/assets/img/orders.svg", text: "Orders" },
  { img: "/src/assets/img/my-cart.svg", text: "My cart" },
];
</script>

<template>
  <div class="max-w-[228px] basis-full flex-between">
    <a
      class="flex flex-col items-center gap-[7px]"
      v-for="nav in navArr"
      :key="nav.text"
      href=""
      @click.prevent=""
    >
      <img :src="nav.img" />
      <p class="text-[12px] font-normal text-gray-500 leading-4">
        {{ nav.text }}
      </p>
    </a>
  </div>
</template>
