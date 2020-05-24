import { setInterval } from 'timers'

let person: object = {
  name: 'jack',
  age: 12
}

interface IPerson {
  address: string
  name: string
}

if (person as IPerson) {
  // console.log('실패?', (person as IPerson).address)
} else {
  // console.log('어찌됨?')
}

type aFunction = (a: number) => void
// let f1: aFunction = a => console.log(a)

type squared = (a: number) => number

function test(s: squared) {}

type NumberToNumberFunc = (a: number) => number

const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number) => b + a
  return _add
}

const makeObject = (key: any, value: any) => ({ [key]: value })
// console.log(makeObject(1, 2))

type ITeacher = { name: string; age: number }

let teacherList: ITeacher[] = [{ age: 12, name: 'dfkj' }]

const array = <T>(array: T[] = []): number => array.length

function test1<T>(v: T): T {
  return v
}

let list: number[] = [1, 2, 3, 4, 4]

const dd = list.reduce((preValue, currentValue) => preValue + currentValue)

// console.log(dd)

export class StringIterable implements Iterable<string> {
  constructor(
    public strings: string[] = [],
    public currentIndex1: number = 0
  ) {}

  [Symbol.iterator](): Iterator<string> {
    const that = this
    let currentIndex = that.currentIndex1
    let length = that.strings.length

    const iterator: Iterator<string> = {
      next(
        ...args: [] | [undefined]
      ): IteratorYieldResult<string> | IteratorReturnResult<any> {
        const value = currentIndex < length ? that.strings[currentIndex++] : ''
        return value === ''
          ? {
              value,
              done: false
            }
          : {
              value,
              done: true
            }
      }
    }
    return iterator
  }
}
// const iterable = new StringIterable(['hello', 'world', '!'])
// const iterator = iterable[Symbol.iterator]()
//
// console.log(iterator.next(), iterable.strings, iterable.currentIndex1)
// console.log(iterator.next(), iterable.strings, iterable.currentIndex1)
// console.log(iterator.next(), iterable.strings, iterable.currentIndex1)
// console.log(iterator.next(), iterable.strings, iterable.currentIndex1)
// for(let value in new StringIterable(['hello', 'world', '!'])) {
//   console.log(`값..: ${value}`)
// }

//Generator 생성자

function* gen() {
  let count = 5
  let select = 0
  while (count--) {
    select = yield `you select ${select}`
  }
}

// const random = (max: number, min = 0) => Math.round(Math.random() * (max - min)) + min
// console.log(random(10, 1))
// console.log(random(10, 1))
// console.log(random(10, 1))
// const iter = gen()
// while(true) {
//   const { value, done } = iter.next(random(10, 1))
//   if(done) break
//   console.log(value)
// }

// Promise

// let p = new Promise<string>(
//   (resolve: (value: string) => void, reject: (error: Error) => void) => {
//     reject(new Error('엊딩..'))
//     resolve('아..')
//   }
// )

// p.then(str => {
//   console.log(str)
// }).catch(e => {
//   console.log(e)
// })
//
// Promise.resolve(1).then(v => {
//   console.log(v)
// })

class Some<T> {
  constructor(public value: T) {}
}

class None {
  constructor() {}
}

class Option {
  private constructor() {}

  static Some<T>(value: T): Some<T> {
    return new Some<T>(value)
  }

  static None = new None()
}

let obj: None = Option.Some('')
// console.log(obj instanceof Option)
// console.log(obj instanceof Some)
// console.log(obj instanceof None)

let tuple: [string, number] = ['123', 12]
let [str, num] = tuple

import * as cr from './namespace/car1'

namespace Car {

  class Taxi implements cr.Car.ICar {
    name: string = ''
    vendor: string = ''
  }
}
// console.log(cr.Car)

let myValue: string

// Promise.reject(new Error('dkfjdkfjdkf')).catch(e => console.log(e))

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let numberKeys = {one: 1, two: 2, three: 3}
console.log(getValue(numberKeys, 'one'))

let p1 = new Promise((resolve, reject) => {
  resolve('모..')
})

let p2 = Promise.resolve('dkf')

Promise.all([p1, p2]).then(datas => {
  console.log(datas)
})

interface IFace {
  name: string
  age: number
}

import { area, IShape } from './ambient/fun1'

let message = area({
  name: 'hi'
}, 10, 5)

console.log(message)
