<script setup lang="ts">
defineProps({
  blockTitle: String,
  blockImg: String,
  itemArr: Array,
});
</script>

<template>
  <section class="mt-[30px]">
    <div
      class="container border-container grid grid-cols-[280px_1fr] p-[0] laptop:grid-cols-1 laptop:grid-rows-[fit-content_1fr]"
    >
      <div class="bg-no-repeat h-full p-[20px] laptop:hidden relative">
        <img :src="blockImg" class="absolute top-[0] left-[0] z-[0] w-full" />
        <div class="z-10 relative">
          <h4 class="max-w-[144px]">{{ blockTitle }}</h4>
          <Btn size="md" color="light" class="mt-[17px]">Source now</Btn>
        </div>
      </div>
      <div class="p-[20px] hidden laptop:block border-gray-200 border-b-[2px]">
        <h5>Deals and offers</h5>
        <p class="body-small-muted">Electronic equipments</p>
      </div>
      <div
        class="grid grid-cols-4 grid-rows-2 h-full bg-gray-200 gap-[2px] tablet:grid-cols-2 tablet:gird-rows-[auto] tablets:flex-between tablets:max-w-[1120px] tablets:overflow-hidden"
      >
        <ShopSimpleItem v-for="el in itemArr" :key="el" :el="el" />
      </div>
      <div class="p-[10px] border-gray-200 border-y-[2px] hidden laptop:block">
        <Btn size="md" color="primary-light" ico="right" class="border-none">
          Source now
          <template #ico>
            <img src="/src/assets/img/arrow.svg" alt="" />
          </template>
        </Btn>
      </div>
    </div>
  </section>
</template>
