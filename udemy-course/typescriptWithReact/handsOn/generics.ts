function identityNumber(value: number): number{
    return value;
}

function identityString(value: string): string {
  return value;
}

function identity<T>(value: T): T{
    return value;
}

let num = identity<number>(100);
let str = identity<string>("Hello");
let bool = identity<boolean>(true);

// no need to specify type, compiler will infer it
let inum = identity(100);
let istr = identity("Hello");
let ibool = identity(true); 

function getFirst<T>(items: T[]): (T | undefined) {
    return items[0];
}

getFirst<number>([1,2,3]);
getFirst<string>(['Bob', 'Alice']);

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 100 }; 
const stringBox: Box<string> = { value: '100' };

class DataHandler<T> {
    constructor(public data: T) {}
}

const holder1 = new DataHandler(123);
const holder2 = new DataHandler("Hello");

function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

logLength("Hello");
logLength([1,2,3]);