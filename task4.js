class BankAccount {
  constructor(accountId, accountTitle, balance, emailID) {
    this._accountId = accountId;
    this._accountTitle = accountTitle;
    this._balance = balance;
    this._emailID = emailID;
  }

  get accountId() {
    return this._accountId;
  }

  set accountId(value) {
    this._accountId = value;
  }

  get accountTitle() {
    return this._accountTitle;
  }

  set accountTitle(value) {
    this._accountTitle = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  get emailID() {
    return this._emailID;
  }

  set emailID(value) {
    this._emailID = value;
  }

  withdrawAmount(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`Amount withdrawn: ${amount}`);
      console.log(`Remaining balance: ${this._balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  depositAmount(amount) {
    this._balance += amount;
    console.log(`Amount deposited: ${amount}`);
    console.log(`Current balance: ${this._balance}`);
  }
  toString() {
    console.log("Account Details");
    return (
      "Account title " +
      this.accountId +
      "\nAccount Title is " +
      this.accountTitle +
      " \nAccount Balance is " +
      this.balance +
      " \nAccount Email is " +
      this.emailID
    );
  }
}

const acc = new BankAccount(1, "Ali", 300000, "ali@gmail.com");
acc.depositAmount(500000);
acc.withdrawAmount(200000);
console.log(acc.toString());
