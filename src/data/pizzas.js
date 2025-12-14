const pizzas = [
  {
    id: "napolitana",
    name: "Pizza Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "espanola",
    name: "Pizza Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    id: "pepperoni",
    name: "Pizza Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
  {
    id: "cuatro-quesos",
    name: "Pizza Cuatro Quesos",
    price: 6950,
    ingredients: ["mozzarella", "parmesano", "gorgonzola", "ricotta"],
    img: "https://www.infobae.com/resizer/v2/BTS3SYGZVRCNNJME5QYF63XBTA.jpg?auth=7df3445b0c3a9afe65c363e716c13baae1cef118de4a6f2c9e3e402b9faebf64&smart=true&width=1200&height=1200&quality=85",
  },
  {
    id: "vegetariana",
    name: "Pizza Vegetariana",
    price: 5950,
    ingredients: ["mozzarella", "pimentón", "aceitunas", "champiñones"],
    img: "https://easyways.cl/storage/20211103083114pizza-vegetariana.jpg",
  },
  {
    id: "pollo-bbq",
    name: "Pizza Pollo BBQ",
    price: 6950,
    ingredients: ["mozzarella", "pollo", "salsa bbq", "cebolla morada"],
    img: "https://cdn.papajohns.cl/thumbnails/pizzas/pollobbq_1691158286_large.jpg",
  },
];

export const pizzaCart = [
  {
    id: "napolitana",
    name: "Pizza Napolitana",
    price: 5950,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    count: 2,
  },
  {
    id: "pepperoni",
    name: "Pizza Pepperoni",
    price: 6950,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    count: 1,
  },
];

export default pizzas;
