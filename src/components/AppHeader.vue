<script setup>

import AppButton from "@/components/ui/AppButton.vue";
import AppInput from "@/components/ui/AppInput.vue";
import AppMenu from "@/components/AppMenu.vue";
import {ref} from "vue";
import AppLogo from "@/components/AppLogo.vue";
import {useStore} from "@/store/store.js";

const menuItems = ref([
  {id: 1, label: 'Мои заказы', href: '#'},
  {id: 2, label: 'Сотрудники', href: '#'},
  {id: 3, label: 'Шаблоны заказов', href: '#'},
  {id: 4, label: 'Обращения', href: '#'},
]);
const isMenuOpen = ref(false);
const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
const store = useStore();


</script>

<template>
  <header class="w-full flex flex-col gap-4 relative">
    <div class="container flex flex-col gap-6">
      <div class="flex items-center max-md:flex-wrap h-2/3 gap-6 max-md:gap-2 max-sm:justify-between">
        <AppLogo/>
        <AppButton
            class="bg-blue-500 max-md:px-3 max-md:py-1 px-7 py-4 rounded-xl gap-2 text-white"
            icon="pi pi-list"
            label="Меню"
        />
        <AppInput/>

        <div
            class="flex  items-center gap-6 h-full
        max-md:flex-col max-md:fixed max-md:w-screen max-md:h-screen top-0
        max-md:bg-blue-100 max-md:items-start
        max-md:p-5 max-md:z-10 left-full"
            :class="isMenuOpen ? 'max-md:left-0' : 'max-md:left-full'"
        >
          <div class="flex items-center gap-2">
            <AppButton class="text-blue-500 text-3xl" icon="pi pi-bell"/>

            <div class="h-2/3 w-[2px] bg-gray-300 max-md:hidden"></div>

            <AppButton class="text-gray-500 text-3xl hover:text-red-500" icon="pi pi-heart"/>
          </div>
          <AppButton
              class="text-blue-500 text-3xl gap-2 bg-blue-50 px-7 py-4 rounded-xl"
              icon="pi pi-shopping-cart"
              :label="`${store.totalPrice}₽`"
          />
          <div class="flex items-center gap-2">
            <img alt="avatar" src="@/assets/images/svg/Avatar.svg"/>
            <p class="text-xl text-blue-950">Ермаков Е.</p>
            <i class="pi pi-chevron-down text-blue-500 font-bold"></i>
          </div>

        </div>
        <AppButton
            icon="pi pi-bars"
            class="hidden border border-gray-900 p-2 rounded
        max-md:flex items-center justify-center absolute z-20 right-2 top-2 max-sm:top-16 max-md:top-5"
            @click="openMenu()"
        />

      </div>

      <hr class="max-md:hidden">
      <div class="w-full">
        <div
            class="w-full flex items-center gap-6 max-md:flex-col max-md:items-start max-md:fixed top-1/3 right-0 z-10"
            :class="isMenuOpen ? 'max-md:right-0' : 'max-md:right-full'"
        >
        <ul class="flex items-center gap-4 max-md:flex-col ">
          <AppMenu
              v-for="item in menuItems"
              :key="item.id"
              :href="item.href"
              :label="item.label"
          />
        </ul>
        <div class="max-md:flex-col gap-6 flex max-md:items-start items-center max-md:flex-wrap">
          <AppButton
              class="gap-2 bg-blue-50 px-3 py-3 text-blue-500 rounded-xl"
              icon="far fa-comment-dots"
              label="Ваш менеджер"
          />
          <AppButton
              class="text-blue-500 text-lg gap-4"
              icon="pi pi-percentage"
              label="Акции"
          />
          <AppButton
              class="text-blue-500 text-lg"
              label="Блог"
          />
        </div>
        </div>

      </div>
    </div>
    <hr class="max-md:hidden">
  </header>
</template>

<style scoped>

</style>