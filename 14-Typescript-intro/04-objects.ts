const user: { firstName: string, lastName: string, age: number } = {
    firstName: "John",
    lastName: "Wick",
    age: 35,
}

console.log(user);
console.log(typeof user);

function printUser(): { name: string, age: number, location: string } {
    return {
        name: "Henry Cavill",
        age: 30,
        location: "USA"
    };
}

console.log(printUser());
console.log(typeof printUser());