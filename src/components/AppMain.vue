<script setup>

import AppMenu from "@/components/AppMenu.vue";
import {ref} from "vue";
import AppButton from "@/components/ui/AppButton.vue";
import AppSwitcher from "@/components/ui/AppSwitcher.vue";
import {useStore} from "@/store/store.js";

const paginationItems = ref([
  {id: 1, label: 'Каталог', href: "#"},
  {id: 1, label: '/ Обувь', href: "#"},
  {id: 1, label: '/ Кроссовки', href: "#"},
  {id: 1, label: '/ Беговые', href: "#"},
]);
const store = useStore();

const sneakerIcons = ref([
  {id: 1, alt: 'sneaker', path: 'sneaker-icon-1.png'},
  {id: 2, alt: 'sneaker', path: 'sneaker-icon-2.png'},
  {id: 3, alt: 'sneaker', path: 'sneaker-icon-3.png'},
  {id: 4, alt: 'sneaker', path: 'sneaker-icon-4.png'},
]);

const deliveryData = ref([
  {id: 1, title: 'Завтра', text: 'Доставка'},
  {id: 2, title: '7 шт.', text: 'Тарасовка'},
  {id: 3, title: '7 шт.', text: 'Тарасовка'},
]);
const characteristicsOfProduct = ref([
  {id: 1, title: 'ELC00696', text: 'Код поставщика'},
  {id: 2, title: 'ELC0200000696', text: 'Артикул'},
  {id: 3, title: 'ELC00696', text: 'Код РАЭК'},
  {id: 4, title: 'ELC00696', text: 'Код ЕТМ'},
  {id: 5, title: 'Electric used', text: 'Брэнд'},
  {id: 6, title: 'ELC00696', text: 'Серия'},
  {id: 7, title: 'ELC0200000696', text: 'Код производителя'},
])

</script>

<template>
  <main class="py-8">
    <div class="container flex flex-col gap-6">
      <ul class="flex items-center gap-2 max-sm:text-sm max-md:text-xl">
        <AppMenu
            v-for="item in paginationItems"
            :key="item.id"
            :href="item.href"
            :label="item.label"
            class="text-gray-400"
        />
      </ul>
      <h1 class="text-4xl font-semibold uppercase">
        Кроссовки мужские Skechers Sunny Dale
      </h1>
      <div class="flex h-full w-full gap-12 max-md:flex-col">
        <div class="flex flex-col gap-6 max-w-1/3">
          <div class="w-full">
            <img alt="sneaker" class="w-full" src="@/assets/images/png/sneakers/sneaker-full-1.png">
          </div>
          <div class="flex items-center gap-3 max-sm:gap-1">
            <AppButton class="py-4 bg-blue-50 rounded text-blue-500 text-2xl px-2" icon=" fa-solid fa-chevron-left"/>
            <div v-for="item in sneakerIcons" :key="item.id" class="rounded-xl overflow-hidden">
              <img :alt="item.alt" :src="`src/assets/images/png/sneakers/small/${item.path}`"/>
            </div>
            <AppButton class="py-4 bg-blue-50 rounded text-blue-500 text-2xl px-2" icon=" fa-solid fa-chevron-right"/>
          </div>

        </div>
        <div class="flex flex-1 flex-col gap-12 pt-6">
          <div class="flex gap-12 max-md:flex-col">
            <div class="flex flex-col gap-6">


              <p class="text-red-500">166 534.00 цена без скидки</p>


              <div class="flex items-center gap-4">
                <h2 class="text-4xl font-bold">
                  {{store.priceOfProduct}} ₽
                </h2>
                <span class="bg-red-500 text-xl px-2 py-0.5 rounded text-white"> -15% </span>
              </div>


              <div class="flex gap-4 items-center">
                <p class="rounded bg-gray-100 py-2 px-2">12 штук в уп.</p>
                <AppSwitcher/>
                <p class="text-xl">Заказ упаковкой</p>
              </div>
              <hr>
              <div class="grid grid-cols-3">
                <div
                    v-for="item in deliveryData"
                    :key="item.id"
                    class="flex flex-col"
                >
                  <h3 class="font-bold text-2xl">{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
              </div>
              <div class="w-full flex gap-4">
                <AppButton
                    class="flex-1 bg-blue-500 px-7 py-4 rounded-xl justify-center gap-2 text-white"
                    icon="pi pi-shopping-cart"
                    label="В корзину"
                    v-if="!store.isHovered"
                    @mouseenter="store.isHovered = true"
                    @mouseleave="store.isHovered = false"
                />
                <div
                    v-if="store.isHovered"
                    v-show="store.isHovered"
                    class="flex cursor-pointer justify-between items-center flex-1 h-full px-7 py-4 rounded-xl border-2 border-blue-500 gap-2"
                    @mouseleave="store.isHovered = false"
                >
                  <AppButton icon="pi pi-minus" @click="store.removeToCart" />
                  <p>{{ store.countOfProducts }}</p>
                  <AppButton icon="pi pi-plus" @click="store.addTodCart" />
                </div>
                <AppButton
                    class="bg-blue-50 hover:text-red-500 text-xl text-blue-500 rounded-xl px-5"
                    icon="pi pi-heart"
                />
              </div>

            </div>
            <div class="h-full w-[2px] bg-gray-200"></div>
            <div class="flex flex-col gap-8 flex-1">
              <h2 class="text-2xl font-bold">Характеристики</h2>
              <div class="grid w-full gap-6 grid-cols-2 max-sm:grid-cols-1">
                <div
                    v-for="item in characteristicsOfProduct"
                    :key="item.id"
                    class="flex flex-col"
                >
                  <h3 class="font-semibold text-xl">{{ item.title }}</h3>
                  <p class="font-light text-gray-300">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <h2 class="font-bold text-2xl">Описание товара</h2>
            <p>Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR
              существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что
              коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
              экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.</p>
          </div>

        </div>

      </div>

    </div>
  </main>
</template>

<style scoped>

</style>