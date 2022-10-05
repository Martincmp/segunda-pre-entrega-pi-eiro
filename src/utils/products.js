export const products = [
  {id: 1, title:'Maquina Smith', category:'Icarian', description:'Maquina multipower con balancines', price: 100, pictureUrl: 'https://www.precor.com/sites/default/files/styles/product_image/public/Smith%20Machine%20DPL3.png?itok=GEv28hjN', stock:'number'},
  {id: 2, title:'Press Inclinado', category: 'Precor', description:'Maquina Pectorales Superiores', price: 100, pictureUrl: 'https://www.precor.com/sites/default/files/styles/product_image/public/dpl_incline%20press.png?itok=5N0Wk43K', stock:'number'},
  {id: 3, title:'Fondos y Dominadas', category:'Icarian', description:'MAquina asistida', price: 100, pictureUrl: 'https://www.precor.com/sites/default/files/styles/large/public/product/3/2/320_dip_chin_assist_472w_hero.jpg?itok=fEKOzcMq', stock:'number'},
  {id: 4, title:'Femorales', category: 'Precor', description:'Maquina para piernas', price: 100, pictureUrl: 'https://www.precor.com/sites/default/files/styles/product_image/public/dspl_leg%20curl.png?itok=pfKqutCx', stock:'number'}
]

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};