let user: [number, string, boolean];

// Correct initialization
user = [101, "Alice", true];

// Error: Type 'string' is not assignable to type 'number'
// user = ["Alice", 101, true]; 


type GraphCoordinate = [x: number, y: number];
const point: GraphCoordinate = [12.5, 45.1];


// Readonly Tuple
const response: readonly [number, string] = [200, "OK"];
// response.push("unexpected"); // Error TS2542:



// Optional Elements
type IceCreamOrder = [flavor: string, extraScoop?: boolean];
const order1: IceCreamOrder = ["Vanilla"];
const order2: IceCreamOrder = ["Chocolate", true];

// Rest Elements
type TaggedStrings = [number, ...string[]];
const tags: TaggedStrings = [1, "alpha", "beta", "gamma"];





enum Status {
    Pending,
    Approved,
    Rejected
}

enum StatusCode {
    NotFound = 404,
    InternalServerError = 500,
    BadGateway // 501
}


enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up);
console.log(Direction['Up']);
console.log(Direction.Down);
console.log(Direction['Down']);


enum Role { Admin = 1 }
let roleName = Role[1];

console.log(roleName);


const enum ConstantDirection {
    North = "N",
    South = "S"
}
// Compiles down directly to direct strings in JS, leaving no enum object behind.
let heading = ConstantDirection.North; 
