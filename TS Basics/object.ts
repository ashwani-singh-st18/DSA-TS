// in object we can define the type of the object using "type" keyword

// type User = {
//     name: String;
//     age: number;
//     hobbies: string;
// }

// const user: User = {
//     name: "Test",
//     age: 44,
//     hobbies: "kuch bhi nahi"
// }

// There is also another way to do this we can use interface

// The differece is interfaces can be extended

interface User{
    name: String;
}

interface User2 extends User{
    age: number;
    hobbies: string;
}

const user: User2 = {
    name: "Test",
    age: 44,
    hobbies: "kuch bhi nahi"
}