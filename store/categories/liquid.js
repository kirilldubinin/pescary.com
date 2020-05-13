export const state = () => ({
  name: 'ЛИКВИДЫ',
  shortName: 'ЛИКВИДЫ',
  route:'/pellets',
  img: '/images/mock.png',
  items: [{
    id: 1, // не менять
    type: 'liquid', // не менять
    category: 'Ликвид', // не менять
    code: '863446', // не менять
    name: 'Патока свекловичная',
    description: `Патока свекловичная использовать для прекормки и смазывания очка красивых рыбакоф`,
    composition: `Патока свекловичная`,
    price: '150',
    currency: 'руб.',
    eco: true,
    sizes: ['1000мл'], // подумай как указывать 1000 мл или 1 литр
    img: '/images/mock.png' // не менять
  }, {
    id: 1, // не менять
    type: 'liquid', // не менять
    category: 'Ликвид', // не менять
    code: '863446', // не менять
    name: 'Robin Red',
    description: `Робин рет использовать для прекормки и смазывания очка красивых рыбакоф`,
    composition: `вода сахар перец соль`,
    price: '150',
    currency: 'руб.',
    eco: true,
    sizes: ['1000мл'], // подумай как указывать 1000 мл или 1 литр
    img: '/images/mock.png' // не менять
  }]
})
