<script setup lang="ts">
import { ref } from "vue";

const arr = ref([
  { text: "Help", isCurrent: true, id: Math.random() * 100 },
  { text: "Category 2", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 3", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 4", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 5", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 6", isCurrent: false, id: Math.random() * 100 },
]);

const moneyArr = ref([
  { text: "English, USD", isCurrent: true, id: Math.random() * 100 },
  { text: "Category 2", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 3", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 4", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 5", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 6", isCurrent: false, id: Math.random() * 100 },
]);

const shipArr = ref([
  { text: "Ship to ", isCurrent: true, id: Math.random() * 100 },
  { text: "Category 2", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 3", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 4", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 5", isCurrent: false, id: Math.random() * 100 },
  { text: "Category 6", isCurrent: false, id: Math.random() * 100 },
]);
</script>
<template>
  <div class="w-full border-y-[1px] border-[#E0E0E0]">
    <div class="container flex-between body-default text-dark">
      <div class="max-w-[620px] flex-between basis-full gap-2 laptop:m-auto">
        <BurgerMenu />
        <ul class="flex-between max-w-[593px] basis-full">
          <li><button>All category</button></li>
          <li><button>Hot offers</button></li>
          <li><button>Gift boxes</button></li>
          <li><button>Projects</button></li>
          <li><button>Menu item</button></li>
          <li>
            <ShopCategory :arr="arr" />
          </li>
        </ul>
      </div>
      <div class="flex-between max-w-[271px] basis-full laptop:hidden">
        <ShopCategory :arr="moneyArr" class="max-w-[133px]" />
        <ShopCategory :arr="shipArr" class="max-w-[119px]">
          <template #current-ico>
            <img src="/src/assets/img/DE.svg" class="max-w-[22px] basis-full" />
          </template>
        </ShopCategory>
      </div>
    </div>
  </div>
</template>
