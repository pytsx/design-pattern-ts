// using object-oriented programming

import { AbstractFactory } from "../common/example"

class ConcreteProductA1 {
  func() {
    console.log("[OOP] ConcreteProductA1")
  }
}

class ConcreteProductA2 {
  func() {
    console.log("[OOP] ConcreteProductA2")
  }
}

class ConcreteProductB1 {
  func() {
    console.log("[OOP] ConcreteProductB1")
  }
}

class ConcreteProductB2 {
  func() {
    console.log("[OOP] ConcreteProductB2")
  }
}

export class ConcreteFactory1 {
  createProductA() {
    return new ConcreteProductA1()
  }
  createProductB() {
    return new ConcreteProductB1()
  }
}

export class ConcreteFactory2 {
  createProductA() {
    return new ConcreteProductA2()
  }
  createProductB() {
    return new ConcreteProductB2()
  }
}

export function client(factory: AbstractFactory) {
  const productA = factory.createProductA()
  const productB = factory.createProductB()

  productA.func()
  productB.func()
}