<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  arr: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const showCategories = ref(false);
const currentCategory = ref(`${props.arr[0].text}`);

interface category {
  text: string;
  isCurrent: boolean;
  id: number;
}

const changeCategory = (name: string) => {
  props.arr.forEach((el: category) => {
    if (el.text === name) {
      el.isCurrent = true;
      currentCategory.value = el.text;
    } else {
      el.isCurrent = false;
    }
  });
};

const handleClickOutside = (event: MouseEvent) => {
  const categoriesElement = document.querySelector(".categories-container");
  console.log("Event Target:", event.target);
  console.log("Categories Element:", categoriesElement);
  if (categoriesElement && !categoriesElement.contains(event.target as Node)) {
    showCategories.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    class="basis-full text-center relative h-[44px]"
    :class="{ 'categories-container': true, active: showCategories }"
  >
    <div class="bg-light flex flex-col" :class="{ active: showCategories }">
      <button
        class="p-[10px]"
        @click.prevent="showCategories = !showCategories"
      >
        <span class="flex-between gap-2 cursor-pointer">
          <p class="body-default">
            {{ currentCategory }}
          </p>
          <slot name="current-ico"></slot>

          <img
            src="/src/assets/img/arrow-b.svg"
            class="duration-300"
            :class="{ reverseArrow: showCategories }"
          />
        </span>
      </button>

      <ul class="flex flex-col z-[200]" v-if="showCategories">
        <li
          v-for="nav in arr"
          :key="nav.id"
          class="cursor-pointer px-[15px] py-[10px] hover:bg-[#E5F1FF] duration-300"
          @click="
            changeCategory(nav.text);
            showCategories = false;
          "
        >
          <span v-if="nav.isCurrent">
            <p class="text-primary">{{ nav.text }}</p>
            <slot name="item-ico"></slot>
          </span>
          <span v-else>
            <p>{{ nav.text }}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.active {
  box-shadow: 0px 4px 10px 0px rgba(96, 96, 96, 0.2);
  border-radius: 6px;
  z-index: 100;
}

.reverseArrow {
  transform: rotate(-180deg);
}
</style>
