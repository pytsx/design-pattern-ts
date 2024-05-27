// using functional programming

import {
  AbstractProductA,
  AbstractProductB,
  AbstractFactory,
} from "../common/example";

declare const createProductA1: AbstractProductA
declare const concreteProductB1: AbstractProductB

declare const createProductA2: AbstractProductA
declare const concreteProductB2: AbstractProductB

export const concreteFactory1: AbstractFactory
export const concreteFactory2: AbstractFactory

export function client(factory: AbstractFactory): void 