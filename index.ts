const ageDuCapitaine = (age: number, size?: number): void => {
  if (size) {
    console.log(
      "la taille du capitaine est de",
      size,
      "cm et il est agé de",
      age
    );
  } else {
    console.log("le capitaine est agé de", age, "ans");
  }
};
ageDuCapitaine(19);

//Enum & Tuple
enum Role {
  ADMIN,
  PREMIUM,
  BASIC,
}
console.log(Role.ADMIN);

interface user {
  name: string;
  attributes: [number | boolean, string];
  role: Role;
}

const user1: user = {
  name: "julien",
  attributes: [false, "author"],
  role: Role.ADMIN,
};

console.log(user1.role);

if (user1.role === Role.ADMIN) {
  console.log("connexion spéciale");
}
