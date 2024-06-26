<script setup lang="ts"></script>

<template>
  <header class="min-w-full border-b-2">
    <div
      class="p-[22px] max-w-[1140px] m-auto flex justify-between items-center gap-5 tablet:gap-3"
    >
      <div class="flex justify-between items-center gap-[20px]">
        <BurgerMenu />
        <ShopLogo />
      </div>
      <ShopForm class="tablet:hidden" />
      <ShopNav class="tablets:hidden" />
      <ShopTabletNav />
    </div>
    <div class="max-w-[1140px] hidden tablet:block m-auto p-[22px] pt-0">
      <div class="w-full m-auto flex tablets:hidden">
        <ShopForm class="w-full m-auto hidden tablet:flex" />
      </div>
      <ShopTabletInput />
    </div>
  </header>
</template>
