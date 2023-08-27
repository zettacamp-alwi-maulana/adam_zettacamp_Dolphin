const favoriteBook1 = "One Piece";
const favoriteBook2 = "Fullmetal Alchemist";

const sameName = favoriteBook1 === favoriteBook2;

const notSame = "the books do not have the same name";
const same = "the books have the same name";

console.log("This program checks if two words have the same name.");
console.log("Word 1: " + favoriteBook1);
console.log("Word 2: " + favoriteBook2);

console.log("Do these words have the same name?");
console.log("It is " + sameName +", "+ (sameName ? same : notSame));
