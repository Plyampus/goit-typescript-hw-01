const user = { name: "John", age: 30 };
const preferences = { theme: "dark", language: "en" };

const mergedData = merge(user, preferences);
console.log(mergedData);

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
