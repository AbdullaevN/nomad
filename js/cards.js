//  const cards = [
//     { image: '../assets/where/kulun.png', title: 'Озера Кулун', description: 'Озера Кулун (Большой, Средний, Малый) – живописные высокогорные озера, находящееся в Кыргызстане в Кулунатинском заповеднике, на границе Ошской и Джалал-Абадской области.', buttonText: 'Водоем', date: 'С декабря по апрель' },

//     { image: '../assets/where/karkyra.png', title: 'Базовый лагерь Каркыра', description: 'Базовый лагерь Каркыра, расположенный на высоте около 2200 метров над уровнем моря, находится в живописной долине Каркыра на границе между Кыргызстаном и Казахстаном. Это уникальное место в Иссык-Кульской области, популярное среди любителей горного туризма, альпинистов и поклонников дикой природ', buttonText: 'Горы', date: 'С декабря по апрель' },

//     { image: '../assets/where/meerim.png', title: 'Петроглифы Мээрим-Таш', description: 'В Таласской области, Таласского района близ села Кара - Ой на одной из невысоких гор «Мээрим-Таш» недавно было сделано интересное открытие — скала с древними петроглифами.', buttonText: 'Петроглифы', date: 'С декабря по апрель' },

//     { image: '../assets/where/meerim.png', title: 'Национальный природный парк Саркент', description: 'Национальный природный парк Саркент расположен на территории Ляйлякского района Бактенской области. Парк образован с целью сохранения биологического разнообразия природных комплексов. Существует несколько легенд о названии местности, одна из которых гласит: ...', buttonText: 'Петроглифы', date: 'С декабря по апрель' },

//     { image: '../assets/where/meerim.png', title: 'Национальный природный парк Саркент', description: 'Национальный природный парк Саркент расположен на территории Ляйлякского района Бактенской области. Парк образован с целью сохранения биологического разнообразия природных комплексов. Существует несколько легенд о названии местности, одна из которых гласит: ...', buttonText: 'Петроглифы', date: 'С декабря по апрель' },

//     { image: '../assets/where/meerim.png', title: 'Геопарк Сары-Камыш: Охрана Палеонтологического Наследия', description: 'Геопарк Сары-Камыш в Джалал-Абадской области – уникальный природный объект, представляющий собой значительное геологическое и', buttonText: 'Петроглифы', date: 'С декабря по апрель' },
  
// ];

// const cardsGrid = document.getElementById('cardsGrid');

// cards.forEach(card => {
//     const cardElement = document.createElement('div');
//     cardElement.classList.add('bg-white', 'rounded-xl', 'shadow-lg', 'overflow-hidden');
    
//     cardElement.innerHTML = `
// <img src="${card.image}" alt="${card.title}" class="w-full h-40 sm:h-48 object-cover rounded-t-xl">
// <div class="p-4">
// <h3 class="text-lg sm:text-xl font-semibold mb-2">${card.title}</h3>
// <p class="card-description text-gray-600 text-sm sm:text-base mb-3">${card.description}</p>
// <hr class="bg-gray-300 h-0.5  mx-auto mb-3">
// <div class="flex justify-between items-center">
//     <button class="bg-gray-200 text-[#3B4C66] px-3 py-1 rounded-lg shadow-sm">${card.buttonText}</button>
//     <span class="text-gray-500 text-sm">${card.date}</span>
// </div>
// </div>
// `;

//     cardsGrid.appendChild(cardElement);
// });
const cards = [
    { image: '../assets/where/kulun.png', title: 'Озера Кулун', description: 'Озера Кулун (Большой, Средний, Малый) – живописные высокогорные озера, находящееся в Кыргызстане в Кулунатинском заповеднике, на границе Ошской и Джалал-Абадской области.', buttonText: 'Водоем', date: 'С декабря по апрель' },

    { image: '../assets/where/karkyra.png', title: 'Базовый лагерь Каркыра', description: 'Базовый лагерь Каркыра, расположенный на высоте около 2200 метров над уровнем моря, находится в живописной долине Каркыра на границе между Кыргызстаном и Казахстаном. Это уникальное место в Иссык-Кульской области, популярное среди любителей горного туризма, альпинистов и поклонников дикой природ', buttonText: 'Горы', date: 'С декабря по апрель' },

    { image: '../assets/where/meerim.png', title: 'Петроглифы Мээрим-Таш', description: 'В Таласской области, Таласского района близ села Кара - Ой на одной из невысоких гор «Мээрим-Таш» недавно было сделано интересное открытие — скала с древними петроглифами.', buttonText: 'Петроглифы', date: 'С декабря по апрель' },

    { image: '../assets/where/meerim.png', title: 'Национальный природный парк Саркент', description: 'Национальный природный парк Саркент расположен на территории Ляйлякского района Бактенской области. Парк образован с целью сохранения биологического разнообразия природных комплексов. Существует несколько легенд о названии местности, одна из которых гласит: ...', buttonText: 'Петроглифы', date: 'С декабря по апрель' },

    { image: '../assets/where/meerim.png', title: 'Национальный природный парк Саркент', description: 'Национальный природный парк Саркент расположен на территории Ляйлякского района Бактенской области. Парк образован с целью сохранения биологического разнообразия природных комплексов. Существует несколько легенд о названии местности, одна из которых гласит: ...', buttonText: 'Петроглифы', date: 'С декабря по апрель' },

    { image: '../assets/where/meerim.png', title: 'Геопарк Сары-Камыш: Охрана Палеонтологического Наследия', description: 'Геопарк Сары-Камыш в Джалал-Абадской области – уникальный природный объект, представляющий собой значительное геологическое и', buttonText: 'Петроглифы', date: 'С декабря по апрель' },
  
];

const cardsGrid = document.getElementById('cardsGrid');

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('bg-white', 'rounded-xl', 'shadow-lg', 'overflow-hidden');
    
    cardElement.innerHTML = `
<img src="${card.image}" alt="${card.title}" class="w-full h-40 sm:h-48 object-cover rounded-t-xl">
<div class="p-4">
<h3 class="text-lg sm:text-xl font-semibold mb-2">${card.title}</h3>
<p class="card-description text-gray-600 text-sm sm:text-base mb-3">${card.description}</p>
<hr class="bg-gray-300 h-0.5  mx-auto mb-3">
<div class="flex justify-between items-center">
    <button class="bg-gray-200 text-[#3B4C66] px-3 py-1 rounded-lg shadow-sm">${card.buttonText}</button>
    <span class="text-gray-500 text-sm">${card.date}</span>
</div>
</div>
`;

    cardsGrid.appendChild(cardElement);
});
