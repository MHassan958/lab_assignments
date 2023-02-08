class Payment {
  constructor(amount) {
    this.amount = amount;
  }

  paymentDetails() {
    console.log(`The payment amount is $${this.amount}.`);
  }
}

class CashPayment extends Payment {
  constructor(amount) {
    super(amount);
  }

  paymentDetails() {
    console.log(`The payment amount is $${this.amount} and is in cash.`);
  }
}

class CreditCard {
  constructor(name, expiryDate, cardNumber) {
    this.name = name;
    this.expiryDate = expiryDate;
    this.cardNumber = cardNumber;
  }
}

class CardPayment extends Payment {
  constructor(amount, creditCard) {
    super(amount);
    this.creditCard = creditCard;
  }

  paymentDetails() {
    console.log(
      `The payment amount is $${this.amount} and is made with a credit card.`
    );
    console.log(`Name on card: ${this.creditCard.name}`);
    console.log(`Expiry Date: ${this.creditCard.expiryDate}`);
    console.log(`Card Number: ${this.creditCard.cardNumber}`);
  }
}

const main = () => {
  const payments = [
    new CashPayment(100),
    new CashPayment(200),
    new CardPayment(
      150,
      new CreditCard("John Doe", "01/2025", "1234567890123456")
    ),
    new CardPayment(
      250,
      new CreditCard("Jane Doe", "05/2022", "2345678901234567")
    ),
  ];

  console.log("Payment Details:");
  payments.forEach((payment) => {
    payment.paymentDetails();
    console.log("---");
  });
};

main();
