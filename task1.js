function purchaseBook(bookTitle, bookAuthor, bookPrice, discountPercentage, taxPercentage) {
    const discountAmount = (discountPercentage / 100) * bookPrice;
    const priceAfterDiscount = bookPrice - discountAmount;
    const taxSum = (taxPercentage / 100) * priceAfterDiscount;
    const priceAfterTax = priceAfterDiscount + taxSum;
    const isDiscounted = discountPercentage > 0; 
  
    console.log("           Book Purchase Details");
    console.log("");
    console.log("Title                :", bookTitle);
    console.log("Author               :", bookAuthor);
    console.log("Price                :", bookPrice);
    console.log("Discount             :", discountPercentage,"%");
    console.log("Tax                  :", taxPercentage,"%");
    console.log("Discount Applied     :", isDiscounted); 
    console.log("Amount of Discount   :", discountAmount);
    console.log("Price after Discount :", priceAfterDiscount);
    console.log("Amount of Tax        :", taxSum);
    console.log("Price after Tax      :", priceAfterTax);
}

 
const result = purchaseBook("One Piece", "Eiichiro Oda", 500000, 25, 11);
return(result);

// purchaseBook("One Piece", "Eiichiro Oda", 500000, 25, 11);

