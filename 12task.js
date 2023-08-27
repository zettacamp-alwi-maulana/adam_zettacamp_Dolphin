function purchaseBook(book, discountPercentage, taxPercentage, stock, purchase) {
  const { bookTitle, bookAuthor, bookPrice } = book;

  let totalPrice = 0;

  const initialStock = stock;

  for (let i = 1; i <= purchase; i++) {
    if (stock > 0) {
      const discountAmount = (discountPercentage / 100) * bookPrice;
      const priceAfterDiscount = bookPrice - discountAmount;
      const taxAmount = (taxPercentage / 100) * priceAfterDiscount;
      const priceAfterTax = priceAfterDiscount + taxAmount;

      totalPrice += priceAfterTax;

      stock--;
    } else {
      break;
    }
  }

  const isSuccessful = purchase <= initialStock;

  return {
    bookTitle,
    bookAuthor,
    bookPrice,
    discountPercentage,
    taxPercentage,
    initialStock,
    purchase,
    remainingStock: stock,
    totalPrice,
    isSuccessful
  };
}

const book = {
  bookTitle: "One Piece",
  bookAuthor: "Eiichiro Oda",
  bookPrice: 50000
};

// book, discountPercentage, taxPercentage, stock, purchase

const result = purchaseBook(book, 25, 11, 2, 3);
console.log(result);
