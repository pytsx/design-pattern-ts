// using object-oriented programming

import {
  AbstractProductA,
  AbstractProductB,
  AbstractFactory,
} from "../common/example";

declare class ConcreteProductA1 implements AbstractProductA {
  func(): void
}

declare class ConcreteProductA2 implements AbstractProductA {
  func(): void
}

declare class ConcreteProductB1 implements AbstractProductB {
  func(): void
}

declare class ConcreteProductB2 implements AbstractProductB {
  func(): void
}


export declare class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA
  createProductB(): AbstractProductB
}

export declare class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA
  createProductB(): AbstractProductB
}


export declare function client(factory: AbstractFactory): void