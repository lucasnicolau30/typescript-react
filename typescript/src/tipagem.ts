const numero: number = 10;
const nome: string = 'Lucas';
const verdadeiro: boolean = true;

console.log(numero);
console.log(nome);
console.log(verdadeiro);

const arrNum: number[] = [10, 20, 30];
const arrNome: string[] = ["Lucas", "Nicolle"];

console.log(arrNum);
console.log(arrNome);

const obj: { name: string; age: number; arr: (number | string)[] } = {
    "name": "Lucas",
    "age": 21,
    "arr": [20, "Nicolle"]
}

console.log(obj);

interface User {
    name: string,
    age: number,
    car?: string | boolean
}

const user1: User = {
    name: "Lucas",
    age: 21
}

const user2: User = {
    name: "Nicolle",
    age: 20,
    car: "Mobi"
}

console.log(`Olá, ${user1.name}`);
console.log(`${user1.age}`);
console.log(`Olá, ${user2.name}`);
console.log(`${user2.age}`);
console.log(`${user2.car}`);