<script setup lang="ts"></script>

<template>
  <header class="min-w-full sticky bg-light top-0 z-[100]">
    <div class="p-[22px] container flex-between gap-5 tablet:gap-3">
      <div class="flex-between gap-[20px]">
        <BurgerMenu class="hidden tablets:flex" />
        <ShopLogo />
      </div>
      <ShopForm class="tablet:hidden" />
      <ShopHeaderNav class="tablets:hidden" />
      <ShopTabletNav />
    </div>
    <div class="container hidden tablet:block p-[22px] pt-0">
      <div class="w-full m-auto flex tablets:hidden">
        <ShopForm class="w-full m-auto hidden tablet:flex" />
      </div>
      <ShopTabletInput />
    </div>
    <ShopHeaderCategories class="tablets:hidden" />
    <ShopTabletCategories />
  </header>
</template>
