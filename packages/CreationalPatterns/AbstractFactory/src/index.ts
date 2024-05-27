import * as OOP from "./object-oriented"
import * as FP from "./functional"

OOP.client(new OOP.ConcreteFactory1())

console.log("")

FP.client(FP.concreteFactory2)