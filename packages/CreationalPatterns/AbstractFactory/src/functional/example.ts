// using functional programming

import { AbstractFactory } from "../common/example"

const createProductA1 = {
  func: () => console.log("[PF] ConcreteProductA1")
}

const createProductA2 = {
  func: () => console.log("[PF] ConcreteProductA2")
}

const concreteProductB1 = {
  func: () => console.log("[PF] ConcreteProductB1")
}

const concreteProductB2 = {
  func: () => console.log("[PF] ConcreteProductB2")
}

const concreteFactory1 = {
  createProductA: () => createProductA1,
  createProductB: () => concreteProductB1,
}

const concreteFactory2 = {
  createProductA: () => createProductA2,
  createProductB: () => concreteProductB2,
}

function client(factory: AbstractFactory) {
  const productA = factory.createProductA()
  const productB = factory.createProductB()

  productA.func()
  productB.func()
}

export {
  client,
  concreteFactory1,
  concreteFactory2,
}