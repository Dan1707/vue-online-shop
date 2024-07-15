<script setup lang="ts">
const arr = [
  {
    title: "Source from Industry Hubs",
    img: "/src/assets/img/service-img-1.jpeg",
    ico: "/src/assets/img/search-services.svg",
  },
  {
    title: "Customize Your Products",
    img: "/src/assets/img/service-img-2.jpeg",
    ico: "/src/assets/img/custom-services.svg",
  },
  {
    title: "Fast, reliable shipping by ocean or air",
    img: "/src/assets/img/service-img-3.jpeg",
    ico: "/src/assets/img/fly-services.svg",
  },
  {
    title: "Product monitoring and inspection",
    img: "/src/assets/img/service-img-4.jpeg",
    ico: "/src/assets/img/protect-services.svg",
  },
];
</script>

<template>
  <section class="my-[30px]">
    <div class="container bg-transparent">
      <h3>Our extra services</h3>
      <div
        class="grid grid-cols-4 laptop:grid-cols-2 tablets:grid-cols-[1fr_!important] mt-[22px] justify-between items-center gap-5"
      >
        <ShopServicesItem v-for="service in arr" :key="service" :el="service" />
      </div>
    </div>
  </section>
</template>
