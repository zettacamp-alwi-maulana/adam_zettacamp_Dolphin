function purchaseBook(book, discount, tax, stock, purchase, creditFor) {
  const { bookTitle, bookAuthor, bookPrice } = book;

  let totalPrice = 0;

  const initialStock = stock;
  const subtotal = purchase * bookPrice;
  
  for (let i = 1; i <= purchase; i++) {
    if (stock > 0) {
      var discountNominal = (discount / 100) * bookPrice;
      const priceAfterDiscount = bookPrice - discountNominal;
      var taxNominal = (tax / 100) * priceAfterDiscount;
      var priceAfterTax = priceAfterDiscount + taxNominal;

      totalPrice += priceAfterTax;

      stock--;
    } else {
      break;
    }
  }

  const isSuccessful = purchase <= initialStock;

  if (stock === 0) {
    console.log(`You have purchased ${purchase} books of ${bookTitle} by ${bookAuthor}. The total price is ${purchase} x ${priceAfterTax} = ${totalPrice} rupiah. There are no more books left in the stock.`);
  } else {
    console.log(`You have purchased ${purchase} books of ${bookTitle} by ${bookAuthor}. The total price is ${purchase} x ${priceAfterTax} = ${totalPrice} rupiah. There are still ${stock} books left in the stock.`);
  }

  let monthlyPayment = totalPrice / creditFor; 
  let dueDates = [];
  
  Array.from({length: creditFor}, (v, i) => i + 1).forEach(function(monthIndex) {
    let currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + monthIndex);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let formattedDate = day + "-" + month + "-" + year;
    let dueDate = `The due date for month ${monthIndex} is ${formattedDate} and the payment Nominal is ${monthlyPayment} rupiah.`;
    dueDates.push(dueDate);
  });
  

  return `
  ======================================================================================
     Property              Value
  ======================================================================================
     bookTitle         :   ${bookTitle}
     bookAuthor        :   ${bookAuthor}
     bookPrice         :   ${bookPrice} rupiah
     initialStock      :   ${initialStock} books

     purchase          :   ${purchase} books
     subtotal          :   ${subtotal} rupiah
     discount          :   ${discount}%
     tax               :   ${tax}%
     totalPrice        :   ${totalPrice} rupiah
     remainingStock    :   ${stock} books
     isSuccessful      :   ${isSuccessful ? "Yes" : "No"}
     
     creditFor         :   ${creditFor} months
     dueDates          :
     - ${dueDates.join("\n- ")}
  ======================================================================================
  `;
}
  

const book = {
  bookTitle: "One Piece",
  bookAuthor: "Eiichiro Oda",
  bookPrice: 10000
};

// book, discount, tax, stock, purchase, creditFor

const result = purchaseBook(book, 10, 5, 5, 2, 9);
console.log(result);
