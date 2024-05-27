// declare interfaces for each distinct product
export interface AbstractProductA {
  func(): void
}

export interface AbstractProductB {
  func(): void
}

// declare the interface with a list of creation methods for all products
export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}