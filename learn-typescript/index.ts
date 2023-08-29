import products from './products'

const productName: string = 'tote bag';

const product = products.filter((product) => product.name === productName)[0]

if (product.preOrder === 'true') {
  console.log('We\’ll send you a message when the products is on the way.')
} 

let shipping: number
let taxPercent: number
let taxTotal: number
let total: number
const shippingAddress: string = 'Rua da Fábrica, 26'

shipping = Number(product.price) >= 25 ? 0 : 5
console.log(shipping === 0 ? 'We provide free shipping for this product.' : '')

taxPercent = shippingAddress.includes('New York') ? 0.1 : 0.05

taxTotal = Number(product.price) * taxPercent
total = Number(product.price) + taxTotal + shipping
console.log(`
Product name: ${product.name},
Shipping address: ${shippingAddress},
Price of the product: ${product.price},
Tax total: ${taxTotal},
Shipping: ${shipping},
Total amount: ${total}
`)