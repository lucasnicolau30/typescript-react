const user1 = {
    name: "Lucas",
    age: 21,
    car: false
};
const user2 = {
    name: "Lucas",
    age: 21
};
const user3 = {
    age: 22
};
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 3));
function greetingUser(user1) {
    return "Hello, " + user1.name;
}
console.log(greetingUser(user1));
function voidTester() {
    console.log("Teste void");
}
voidTester();
const somaResultado = soma;
console.log(somaResultado(2, 3));
const arrow = () => {
    console.log("Teste arrow");
};
arrow();
const arrowGreeting = (user) => {
    // operador nullish coalescing
    const nome = user.name ?? "Anônimo";
    console.log(`Ola, ${nome}`);
};
arrowGreeting(user2);
arrowGreeting(user3);
function greet(name = "Anônimo") {
    console.log(`Ola, ${name}`);
}
greet();
greet("Lucas");
function generics(tipo) {
    return tipo;
}
console.log("Atribuição em generics: " + generics(10));
console.log("Atribuição em generics: " + generics("Lucas"));
function primeiro(tipo) {
    // ! garante que nao eh undefined
    return tipo[0];
}
const arrGenericsNums = [1, 2, 3];
const arrGenericsStr = ["a", "b", "c"];
console.log("Primeiro: " + primeiro(arrGenericsNums));
console.log("Primeiro: " + primeiro(arrGenericsStr));
let status = "ativo";
console.log(status);
status = "inativo";
console.log(status);
status = "pendente";
console.log(status);
const user4 = {
    name: "user 4",
    age: 4,
    status: "ativo"
};
const user5 = {
    name: "user 5",
    age: 5,
    status: "inativo"
};
const user6 = {
    name: "user 6",
    age: 6,
    status: "pendente"
};
console.log(user4);
console.log(user5);
console.log(user6);
export {};
//# sourceMappingURL=funcoes.js.map