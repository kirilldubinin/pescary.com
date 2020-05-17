export const state = () => ({
  code: 'flour',
  name: 'бойлостроение',
  shortName: 'бойлостроение',
  route:'/pellets',
  img: '/images/flour/main/product.png',
  items: [{
    id: 1, // не менять
    type: 'flour', // не менять
    category: 'Мука экструдированных зерновых', // не менять
    code: '863446', // не менять
    name: 'Мука кукурузы экструдированной',
    description: `Описание тут ...`,
    composition: `Кукуруза экструдированная`,
    price: '150',
    currency: 'руб.',
    eco: true,
    sizes: ['1кг', '5кг', '20кг'],
    route:'products/granule', // не менять
    img: '/images/mock.png' // не менять
  }, {
    id: 1, // не менять
    type: 'flour', // не менять
    category: 'Мука экструдированных зерновых', // не менять
    code: '863446', // не менять
    name: 'Мука гороха экструдированного',
    description: `Описание тут ...`,
    composition: `Горох экструдированный`,
    price: '150',
    currency: 'руб.',
    eco: true,
    sizes: ['1кг', '5кг', '20кг'],
    route:'products/granule', // не менять
    img: '/images/mock.png' // не менять
  }]
})
