<script setup>
import AppButton from "@/components/ui/AppButton.vue";
import AppLogo from "@/components/AppLogo.vue";

const menusOfProducts = [
  {
    id: 1,
    title: 'Женщинам',
    items: [
      {id: 1, text: 'Одежда', link: '#'},
      {id: 2, text: 'Обувь', link: '#'},
      {id: 3, text: 'Аксессуары', link: '#'},
      {id: 4, text: 'Белье', link: '#'},
      {id: 5, text: 'Bra fitting', link: '#'},
    ]
  },
  {
    id: 2,
    title: 'Мужчинам',
    items: [
      {id: 1, text: 'Одежда', link: '#'},
      {id: 2, text: 'Обувь', link: '#'},
      {id: 3, text: 'Аксессуары', link: '#'},
      {id: 4, text: 'Белье', link: '#'},
    ]
  },
  {
    id: 3,
    title: 'Детям',
    items: [
      {id: 1, text: 'Одежда', link: '#'},
      {id: 2, text: 'Обувь', link: '#'},
      {id: 3, text: 'Аксессуары', link: '#'},
      {id: 4, text: 'Белье', link: '#'},
      {id: 5, text: 'Игрушки', link: '#'},
      {id: 6, text: 'Малыши', link: '#'},
    ]
  },
  {
    id: 4,
    title: 'Виды спорта',
    items: [
      {id: 1, text: 'Велоспорт', link: '#'},
      {id: 2, text: 'Туризм', link: '#'},
      {id: 3, text: 'Тренажеры и фитнес', link: '#'},
      {id: 4, text: 'Командные виды спорта', link: '#'},
      {id: 5, text: 'Самокаты', link: '#'},
    ]
  }
];
const externalLinks = [
  {id: 1, title: 'Вакансии', link: '#'},
  {id: 1, title: 'Блог', link: '#'},
  {id: 1, title: 'Акции', link: '#'},
]
const useFullLinks = [
  {id: 1, title: 'PDF  презентация', link: '#', icon: 'pi pi-file', isActive: false,},
  {id: 2, title: 'Видео инструкция ', link: '#', icon: 'pi pi-video', isActive: false,},
  {id: 3, title: 'FAQ', link: '#', icon: 'pi pi-question-circle', isActive: false,},
  {id: 4, title: 'Мы на YouTube', link: '#', icon: 'pi pi-youtube', isActive: true,},
  {id: 5, title: 'Политика конфиденциальности ', link: '#', isActive: false,},
  {id: 6, title: 'Лицензионное соглашение', link: '#', isActive: false,},
]
</script>

<template>
  <footer class="py-12">
    <div class="container max-md:text-sm flex flex-col gap-12">
      <div class="flex max-md:gap-2 justify-between items-center">
        <div class="flex max-md:flex-col items-center gap-14">
          <AppLogo />
          <div class="flex flex-col gap-4">
            <h3 class="font-bold text-lg"><a href="#">8 800 841-95-95</a></h3>
            <p class="text-gray-300 font-light">Служба поддержки</p>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="font-bold text-lg"><a href="#">support@sport.ru</a></h3>
            <p class="text-gray-300 font-light">Служба поддержки</p>
          </div>
        </div>
        <div class="flex max-md:flex-col items-center gap-8">
          <div v-for="item in externalLinks" :key="item.id">
            <a :href="item.link" class="font-bold text-xl max-md:text-lg" target="_blank">{{ item.title }}</a>
          </div>
          <AppButton
              class="bg-blue-50 py-3 px-6 text-blue-700 rounded font-semibold"
              label="Предложить  идею"
          />
        </div>
      </div>
      <hr>
      <div class="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-8">
        <div v-for="item in menusOfProducts" :key="item.id">
          <h3 class="font-bold text-lg">{{ item.title }}</h3>
          <ul class="flex flex-col gap-4">
            <li v-for="link in item.items"><a :href="link.link">
              {{ link.text }}
            </a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="flex flex-col gap-10 items-center">
        <ul class="grid grid-cols-4 gap-7 max-md:grid-cols-2">
          <li v-for="item in useFullLinks" :key="item.id">
            <a
                :class="{'text-blue-700': item.isActive}"
                :href="item.link"
                class="flex items-center gap-2">
              <i :class="item.icon" aria-hidden="true"></i>
              {{ item.title }}
            </a>
          </li>
        </ul>
        <p class="text-center text-sm text-gray-400 font-thin">
          Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской
          Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным
          законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
        </p>
        <div class="flex items-center justify-center gap-6">
          <AppLogo
          class="fill-amber-50"
          fill="#828EAD"
          />
          <p class="text-xl font-semibold text-gray-400">Разработка платформы</p>
        </div>
      </div>
    </div>
  </footer>
</template>