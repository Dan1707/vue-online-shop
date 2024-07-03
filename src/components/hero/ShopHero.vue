<script setup lang="ts"></script>

<template>
  <section class="mt-[20px]">
    <div
      class="container flex-between bg-light p-[20px] border border-gray-300 gap-3 rounded-lg"
    >
      <nav class="max-w-[250px] basis-full">
        <ul>
          <li class="body-default p-[10px] text-gray-600 current-item">
            Automobiles
          </li>
          <li class="body-default p-[10px] text-gray-600">Clothes and wear</li>
          <li class="body-default p-[10px] text-gray-600">Home interiors</li>
          <li class="body-default p-[10px] text-gray-600">Computer and tech</li>
          <li class="body-default p-[10px] text-gray-600">Tools, equipments</li>
          <li class="body-default p-[10px] text-gray-600">
            Sports and outdoor
          </li>
          <li class="body-default p-[10px] text-gray-600">Animal and pets</li>
          <li class="body-default p-[10px] text-gray-600">Machinery tools</li>
          <li class="body-default p-[10px] text-gray-600">More category</li>
        </ul>
      </nav>
      <div
        class="max-w-full min-h-[373px] basis-full banner relative top-[0] px-[44px] py-[56px]"
      >
        <div>
          <p class="text-[28px] leading-[34px]">Latest trending</p>
          <h2>Electronic items</h2>
          <button
            class="px-[16px] py-[10px] bg-light rounded-lg body-default font-semibold text-dark mt-[17px]"
          >
            Learn more
          </button>
        </div>
      </div>
      <div
        class="max-w-[200px] basis-full flex flex-col items-center gap-[10px]"
      >
        <article class="bg-primary-light rounded-lg p-[10px]">
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
        <article class="bg-[#F38332] rounded-lg p-[16px] w-full">
          <p class="body-default text-light max-w-[132px]">
            Get US $10 off with a new supplier
          </p>
        </article>
        <article class="bg-[#55BDC4] rounded-lg p-[16px] w-full">
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

.banner {
  background-image: url("/src/assets/img/hero.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
