export const state = () => ({
  code: 'lure',
  name: 'Прикормка рыболовная',
  shortName: 'прикормка',
  route:'/products/lure',
  img: '/images/lure/main/product.png',
  items: [{
    _id: 683603,
    type: 'lure', // не менять
    category: 'Прикормка рыболовная (Сыпуха)', // не менять
    name: 'Base Carp',
    description: `Базовая прикормка с крупными фракциями кукурузы и гороха, богатая протеином. Обладает высокой вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Сделанные из прикормки шары, попадая в воду, начинают активно распадаться, выделяя в воду различные частички корма и тем самым, привлекая рыбу.
    Не содержит красителей и ароматизаторов, позволяя Вам менять ароматику и цвет по Вашим предпочтениям.
    Компоненты, входящие в состав прикормки, хорошо сохраняют ароматику и любые другие добавки.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, подсластитель`,
    prices: ['140', '390', '650'],
    currency: 'руб.',
    sizes: ['1кг', '3кг', '5кг'],
    fishes: ['Карп', 'Карась'],
    aroma: 'Без ароматизатора',
    color: 'Без красителя',
    route:'products/lure', // не менять
    img: '/images/lure/ablet-min.jpg' // не менять
  }, {
    _id: 969529,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    name: 'Flat Feeder',
    description: `Прикормка черного цвета, предназначенная для ловли на Flat Method Feeder или спиральные кормушки.
    Имеет мелкий помол. Попадая в воду, начинает распадаться, образуя привлекательную горку корма вокруг Вашей насадки.
    Не содержит ароматизаторов, позволяя Вам менять ароматику по Вашим предпочтениям.
    Подходит для ловли в весенний, летний и осенний периоды`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, краситель, подсластитель`,
    prices: ['140'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Черный',
    background: 'black',
    aroma: 'Без ароматизатора',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 277156,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    name: 'Strawberry Cream',
    description: `Прикормка красного цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Клубника со сливками), краситель, подсластитель`,
    prices: ['140'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Красный',
    background: 'red',
    aroma: 'Клубника со сливками',
    route:'products/lure',
    img: '/images/mock.png'
    }, {
    _id: 878587,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Honey',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Мед), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Мед',
    route:'products/lure',
    img: '/images/mock.png'
   }, {
    _id: 553329,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Tutti Frutti',
    description: `Прикормка красного цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Тутти-Фрутти), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Красный',
    background: 'red',
    aroma: 'Тутти-Фрутти',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 371050,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Plum',
    description: `Прикормка красного цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Слива), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Красный',
    background: 'red',
    aroma: 'Слива',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 499670,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Pineapple',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Ананас), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Ананас',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 640688,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Tangerine',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Мандарин), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Желтый',
    aroma: 'Мандарин',
    background: 'yellow',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 412628,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Mulberry',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Шелковица), краситель, подсластитель`,
    prices: '150',
    currency: 'руб.',
    sizes: ['1кг', '5кг', '20кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Красный',
    background: 'red',
    aroma: 'Шелковица',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 134304,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Banana',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Банан), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Банан',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 620799,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Tiger Nut',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Тигровый орех), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Тигровый орех',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 105381,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Hot Spices',
    description: `Прикормка красного цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Острые специи), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Красный',
    background: 'red',
    aroma: 'Острые специи',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 905129,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Garlic',
    description: `Прикормка желтого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Чеснок), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Чеснок',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 384880,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Monster Crab',
    description: `Прикормка коричневого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Монстр краб), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Коричневый',
    background: 'brown',
    aroma: 'Монстр Краб',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 895460,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'White Fish',
    description: `Прикормка коричневого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Белая рыба), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Коричневый',
    background: 'brown',
    aroma: 'Белая рыба',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 198586,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Squid',
    description: `Прикормка коричневого цвета с крупными фракциями кукурузы и гороха. Хорошо сбалансированный состав. Обладает отличной вязкостью.
    Подходит для ловли карпа, амура, и другой крупной рыбы семейства карповых.
    Быстро собирает и удерживает рыбу в месте ловли.
    Подходит для ловли в весенний, летний и осенний периоды.
    Используется при кормлении шарами, в качестве спод-микса (с добавлением гранул и зерновых), для наполнения фидерных кормушек и PVA-стиков, так же может использоваться в жидком виде при ловле на ZIG RIG`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, кукурузные хлопья, гороховая шелуха, жмых подсолнечный, жмых льняной, орехи, гороховая крупа, ароматизатор (Кальмар), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Карп', 'Карась'],
    color: 'Коричневый',
    background: 'brown',
    aroma: 'Кальмар',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 573336,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Base Bream',
    description: `Базовая прикормка среднего помола.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Не содержит красителей и ароматизаторов, позволяя Вам менять ароматику и цвет по Вашим предпочтениям.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Без красителя',
    aroma: 'Без ароматизатора',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 605204,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Sweet Biscuit',
    description: `Прикормка среднего помола желтого цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Сладкое печенье), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Сладкое печенье',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 562841,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Melone',
    description: `Прикормка среднего помола желтого цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Дыня), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Дыня',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 255701,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Anise',
    description: `Прикормка среднего помола желтого цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Анис), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Анис',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 476829,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Vanilla',
    description: `Прикормка среднего помола желтого цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Ваниль), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Желтый',
    background: 'yellow',
    aroma: 'Ваниль',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 141979,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Milk Chocolate',
    description: `Прикормка среднего помола красного цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Молочный шоколад), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Красный',
    background: 'red',
    aroma: 'Молочный шоколад',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 815646,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Caramel',
    description: `Прикормка среднего помола красного цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Карамель), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Красный',
    background: 'red',
    aroma: 'Карамель',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 313236,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Provencal Spices',
    description: `Прикормка среднего помола красного цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Прованские специи), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Красный',
    background: 'red',
    aroma: 'Прованские специи',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 732899,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Peanut',
    description: `Прикормка среднего помола красного цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Арахис), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Красный',
    background: 'red',
    aroma: 'Арахис',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 383592,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Cinnamon',
    description: `Прикормка среднего помола красного цвета.
    Подходит для ловли леща, плотвы и другой речной рыбы.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Используется для наполнения фидерных кормушек, а так же при кормлении шарами. За счет различной плотности сжатия шаров прикормки можно добиться различной скорости распадения их на дне`,
    composition: `Сухарь панировочный, бисквитная крошка, кукурузная крупа, конопля экструдированная, гороховая шелуха, жмых подсолнечный, жмых льняной, гороховая крупа, орехи, ароматизатор (Корица), краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Лещ', 'Плотва'],
    color: 'Красный',
    background: 'red',
    aroma: 'Корица',
    route:'products/lure',
    img: '/images/mock.png'
  }, {
    _id: 775540,
    type: 'lure',
    category: 'Прикормка рыболовная (Сыпуха)',
    code: '551512',
    name: 'Ablet',
    description: `Прикормка мелкого помола белого цвета. Обладает низкой вязкостью.
    Данная прикормка была специально разработана для ловли уклейки, а так же мелкой рыбы в поверхностных и средних слоях воды.
    Идеально для рек, каналов и водохранилищ.
    Создана для ловли в теплое время года.
    Прикормка обладает сложным составом и ароматом. Сладкие нотки карамели перехлестываются с молочными ароматами.
    Данная прикормка должна работать именно в том горизонте, где есть рыба. Поэтому готовить прикормку нужно так, чтобы столб мути появлялся на нужной глубине.
    Если прикормку слегка недоувлажнить, то муть от прикормки будет образововаться в верхних слоях воды. В средних слоях воды станет распадаться переувлажненная прикормка`,
    composition: `Сухарь панировочный, отруби пшеничные, сухое молоко, манка, бисквитная крошка, конопля экструдированная, жмых льняной, орехи, ароматизатор, краситель, подсластитель`,
    prices: ['150'],
    currency: 'руб.',
    sizes: ['1кг'],
    fishes: ['Уклейка'],
    color: 'Белый',
    background: 'white',
    aroma: 'Карамель',
    route:'products/lure',
    img: '/images/mock.png'
  }]
})
