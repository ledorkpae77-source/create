const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined);

const obj1 = { name: "John" };
const obj2 = { age: 30 };
const merged = { ...obj1, ...obj2 };
console.log(merged);