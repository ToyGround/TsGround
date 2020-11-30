// JS 선언
const strJs = 'hello';

// TS 선언
const strTs: string = 'hello';
const numTs: number = 10;
const arrayTs: Array<number> = [1, 2, 3, 4]
const array2Ts: Array<string> = ['aaa', 'bbb', 'ccc']
const array3Ts: number[] = [1, 2, 3, 4]
const array4Ts: string[] = ['a', 'b', 'c']

// TS 튜플 : 배열 요소의 순서에 따른 타입 정의, 배열의 인덱스의 타입을 정
const twoArray: [string, number] = ['abc', 123]

// TS 객체
const obj: object = {}
const person1: object = {
    name: '홍길동',
    age: 20
}
const person2: { name: string, age: number } = {
    name: '홍길동',
    age: 20
}

// TS 불리언
let isSHow: boolean = true

// TS 함수_파라미터 정의
const sum = (a:number, b:number) => a + b;

// TS 함수_리턴 정의
const add = (a:number, b:number):number => a + b;
