// Use type and mentioned in the name of the variable
// Assign an appropriate value

const aNumber: number = 8;
const aString: string = "string";
const aBigInt: BigInt = 9007199254740991n;
const anArray: Array<string> = ["ar", "ray"];
const anUnknown: unknown = "Maybe string, maybe not, he-he-he";
const anObject: Object = { name: "HYF", type: "TypeScript course" };
const aTuple: [number, string] = [1, "TypeScript"];
enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}
const anEnum: Direction = Direction.Up;
// usage eg: move(Direction.Down)

// Implement this function any type accordingly
function isEven(number: number): boolean {
  return number % 2 === 0;
}

// Type the following following function and variable
type Person = {
  name: string;
};

type Developer = {
  role: string;
};

const jane: Person = {
  name: "Jane"
};

const joe: Developer = {
  role: "Devops"
};

const people: (Person | Developer)[] = [jane, joe];

function printPeople(people: Person | Developer) {
  // Print the name of person or the role in this function
  let info: string;
  if ("name" in people) {
    info = people.name;
  } else {
    info = people.role;
  }
  console.log(`${info}`);
}

// Type the encrpyt function correctly
const encryptText = (plainText: string, shift: number) => {
  let cipherArr: any[] = [];
  let cipherLetter: number | string;

  plainText.split("").map(letter => {
    let code = letter.charCodeAt(0);
    if (letter === " ") {
      return cipherArr.push(letter);
    }
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Lowercase letters
    else if (code >= 97 && code <= 122) {
      cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return cipherArr.push(cipherLetter);
  });
  return cipherArr.join("");
};

// Solve using a literal union type
let vegetable: "Cucumber" | "Eggplant" | "Cabbage"; // :Vegetable:
vegetable = "Cucumber";
vegetable = "Eggplant";
vegetable = "Cabbage";

// Solve the following exercise with an intersection type
type Complainer = {
  complains: () => void;
};

type Beerdrinker = {
  drinkBeer: () => void;
};

type ChocolateLover = {
  eatChocolate: () => void;
};

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void {
  belgian.complains();
  belgian.drinkBeer();
  belgian.eatChocolate();
}

module.exports = {
  isEven,
  print,
  encryptText
};
