import * as cr from './car1'

namespace Car {
  let wheels: number = 2312
  console.log(cr.Car.auto)

  class Taxi implements cr.Car.ICar {
    name: string = ''
    vendor: string = ''
  }
}
console.log(cr.Car.auto)
