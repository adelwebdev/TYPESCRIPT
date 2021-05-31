let num: number = 12;
let num3: number;
let numOrString: number | string;
num3 = 32;

//arrays

let tab = ["homme", "femme", "enfant"];
let tableau: (number | boolean)[] = [];

tableau.push(false);
tableau.push(23);
console.log(tableau);

//objets

interface player {
  id: number;
  name: string;
  jersey: number;
}

let zidane: player = {
  id: 0,
  name: "Zidane",
  jersey: 23,
};

//class

class singer {
  id: number;
  name: string;
  alive: boolean;

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    this.alive = alive;
  }
}

const prince = new singer(0, "prince", false);
console.log(prince);
