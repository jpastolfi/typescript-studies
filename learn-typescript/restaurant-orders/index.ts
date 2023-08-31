import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
const getMaxPrice = (price: PriceBracket): number => {
  switch (price) {
    case PriceBracket.Low:
      return 10.0
      break
    case PriceBracket.Medium:
      return 20.0
      break
    default:
      return 30
  }
}
/// Add your getOrders() function below:
const getOrders = (price: PriceBracket, orders: Order[][]) => {
  const filteredOrders: Order[][] = [];
  orders.forEach((order) => {
    filteredOrders.push(order.filter((order) => order.price <= getMaxPrice(price)))
  })
  return filteredOrders
}
/// Add your printOrders() function below:
const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {
  orders.forEach((order, index) => {
  if (order.length !== 0) {
    console.log(`Restaurant ${restaurants[index].name}`)
    order.forEach((item, index2) => console.log(`- Order ${index2 + 1}: ${item.price}`))
  }
  })
}
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);