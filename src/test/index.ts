let person: object = {
  name: "jack",
  age: 12
}

interface IPerson {
  address: string,
  name: string
}

if(person as IPerson) {
  // console.log('실패?', (person as IPerson).address)
} else {
  // console.log('어찌됨?')
}

type aFunction = (a: number) => void
// let f1: aFunction = a => console.log(a)

type squared = (a: number) => number

function test(s: squared) {

}

type NumberToNumberFunc = (a: number) => number

const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number) => b + a
  return _add
}

const makeObject = (key: any, value: any) => ({[key]: value})
// console.log(makeObject(1, 2))

type ITeacher = { name: string, age: number }

let teacherList: ITeacher[] = [{age: 12, name: 'dfkj'}]

const array = <T>(array: T[] = []): number => array.length

function test1<T>(v: T): T {
  return v
}

let list: number[] = [1,2,3,4,4]

const dd = list.reduce((preValue, currentValue) => preValue + currentValue)
console.log(dd)

