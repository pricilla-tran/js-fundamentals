// Exercise 1
interface BlogPost {
  readonly id: number
  title: string
  content: string
  author: string
  publishedAt?: string // ? is for optional
}

const printPost = (post: BlogPost) => {
  console.log(`"${post.title}" by ${post.author}`)
}

printPost({ id: 1, title: "The Art of TypeScript", content: "Lalala", author: "Alice" })

interface Wrapper<T> {
    value: T
    createdAt: string
}

// Exercise 2
interface Animal {
    name: string
    age: number
}

interface Dog extends Animal {
    breed: string   // Dog has everything Animal has, plus breed
}

const dog: Dog = {
    name: "Rex",
    age: 3,
    breed: "Labrador"
}

console.log(`"${dog.name} is a ${dog.age} year old ${dog.breed}""`)

// Exercise 3
interface Product {
    name: string
    price: number
}

const products: Product[] = [
    { name: "Laptop", price: 999 },
    { name: "Phone", price: 699 }
]

const getTotal = (products: Product[]): number => {
    // let total = 0 
    // for (let i =0; i < products.length; i++) {
    //   total = total + products[i].price
    // }
  return products.reduce((acc, product) => acc + product.price, 0)
}

getTotal(products)

// Exercise 4
const userResponse: Wrapper<{ testNumber: number }> = {
    value: { testNumber: 8 },
    createdAt: "2026-09-16"
}

interface User {
    name: string
    age: number
    email?: string  // optional — doesn't have to be provided
}

const createUser = (user: User) => {
    console.log(`Created user: ${user.name}`)
}