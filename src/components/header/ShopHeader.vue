<script setup lang="ts"></script>

<template>
  <header class="min-w-full sticky bg-light top-0 z-[100]">
    <div
      class="p-[22px] container flex-between gap-5 tablet:gap-3 tablets:py-[10px] tablets:px-[16px]"
    >
      <div class="flex-between gap-[20px]">
        <BurgerMenu class="hidden tablets:flex" />
        <ShopLogo />
      </div>
      <ShopForm class="laptop:hidden" />
      <ShopHeaderNav class="tablets:hidden" />
      <ShopTabletNav />
    </div>
    <div class="container w-full hidden laptop:block p-[22px] pt-0">
      <div class="w-full m-auto flex tablets:hidden">
        <ShopForm class="max-w-full m-auto hidden laptop:flex" />
      </div>
      <ShopTabletInput />
    </div>
    <ShopHeaderCategories class="tablets:hidden" />
    <ShopTabletCategories />
  </header>
</template>
