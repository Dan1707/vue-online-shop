<script setup lang="ts">
import { ref } from "vue";

const navCategories = ref([
  { title: "Automobiles", isCurrent: true },
  { title: "Clothes and wear", isCurrent: false },
  { title: "Home interiors", isCurrent: false },
  { title: "Computer and tech", isCurrent: false },
  { title: "Tools, equipments", isCurrent: false },
  { title: "Sports and outdoor", isCurrent: false },
  { title: "Animal and pets", isCurrent: false },
  { title: "Machinery tools", isCurrent: false },
  { title: "More category", isCurrent: false },
]);

const currentCategory = ref(`${navCategories.value[0].title}`);

interface category {
  title: string;
  isCurrent: boolean;
}

const changeCategory = (name: string) => {
  navCategories.value.forEach((el: category) => {
    if (el.title === name) {
      el.isCurrent = true;
      currentCategory.value = el.title;
    } else {
      el.isCurrent = false;
    }
  });
};
</script>

<template>
  <section class="mt-[20px] tablets:mt-[0]">
    <div
      class="container hero flex-between bg-light p-[20px] tablets:p-[0] tablets:w-full tablets:mt-[0] border border-gray-300 gap-3 rounded-lg"
    >
      <nav class="max-w-[250px] basis-full tablets:hidden">
        <ul>
          <li
            class="body-default text-gray-600 cursor-pointer"
            v-for="nav in navCategories"
            :key="nav.title"
            @click="changeCategory(nav.title)"
          >
            <span v-if="nav.isCurrent === false">
              <p class="p-[10px]">{{ nav.title }}</p>
            </span>
            <span v-else>
              <p class="p-[10px] current-item duration-300">{{ nav.title }}</p>
            </span>
          </li>
        </ul>
      </nav>
      <div
        class="max-w-full min-h-[394px] basis-full banner relative top-[0] px-[44px] py-[56px]"
      >
        <div>
          <p class="text-[28px] leading-[34px] tablets:text-[22px]">
            Latest trending
          </p>
          <h2 class="tablets:text-[22px]">Electronic items</h2>
          <button
            class="px-[16px] py-[10px] bg-light rounded-lg body-default font-semibold text-dark mt-[17px] tablets:text-primary tablets:shadow-md tablets:text-[13px]"
          >
            Learn more
          </button>
        </div>
      </div>
      <div
        class="basis-full gap-[10px] flex flex-col items-center max-w-[200px] articles tablets:hidden"
      >
        <article class="bg-primary-light rounded-lg p-[10px] w-full">
          <div class="flex gap-2">
            <img src="/src/assets/img/user.png" class="w-[44px]" />
            <p class="body-default text-dark">
              Hi, user <br />
              let’s get stated
            </p>
          </div>
          <div class="mt-[15px]">
            <BtnNormal class="w-full py-[7px]">Join now</BtnNormal>
            <BtnLight class="w-full py-[7px] mt-[7px]">Log in</BtnLight>
          </div>
        </article>
        <article class="bg-[#F38332] rounded-lg p-[16px] basis-full w-full">
          <p class="body-default text-light max-w-[132px]">
            Get US $10 off with a new supplier
          </p>
        </article>
        <article class="bg-[#55BDC4] rounded-lg p-[16px] basis-full w-full">
          <p class="body-default text-light max-w-[132px]">
            Send quotes with supplier preferences
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.current-item {
  color: var(--dark);
  font-weight: 600;
  background-color: var(--primary-light);
  border-radius: 10px;
}

.nav {
  grid-area: nav;
}

.banner {
  background-image: url("/src/assets/img/hero.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-area: banner;
  height: 100% !important;
}

@media (max-width: 1024px) {
  .hero {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr fit-content;
    grid-template-areas:
      "nav banner banner"
      "articles articles articles";
  }

  .articles {
    max-width: 100%;
    grid-area: articles;
    place-items: stretch stretch;
    flex-direction: row;
  }
}

@media (max-width: 576px) {
  .hero {
    display: flex;
  }
}
</style>
