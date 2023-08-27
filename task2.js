const favBook1 = "One Piece";
const favBook2 = "Fullmetal Alchemist";

const bookPrice1 = 600000;
const bookPrice2 = 400001;

const book1 = { title: favBook1, price: bookPrice1 };
const book2 = { title: favBook2, price: bookPrice2 };

const favBooks = [];

favBooks.push(book1, book2);

const pricier = book1.price > book2.price ? book1 : book2;
console.log("The pricier book is: " + pricier.title); 
console.log("With the price of: " + pricier.price);

/*

const avgPrice = (bookPrice1 + bookPrice2) / 2;
console.log("The books average price is: " + avgPrice);

const value = avgPrice > 500000 ? "Expensive" : "Cheap";
console.log("The value of the books is: " + value);
console.log("Because " + avgPrice + " is " + value );


book1.author = "Eiichiro Oda";
book2.author = "Hiromu Arakawa";

console.log(book1);
console.log(book2);

favBooks.push({
  title: "Bleach",
  price: 550000,
  author: "Tite Kubo"
});

console.log(favBooks);
*/