class Employee {
  constructor(salary, hoursOfWork) {
    this.salary = salary;
    this.hoursOfWork = hoursOfWork;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }

  get hoursOfWork() {
    return this._hoursOfWork;
  }

  set hoursOfWork(value) {
    this._hoursOfWork = value;
  }

  getInfo() {
    console.log(`Salary: $${this.salary}`);
    console.log(`Hours of Work per Day: ${this.hoursOfWork}`);
  }

  AddSal() {
    if (this.salary < 500) {
      this.salary += 10;
    }
  }

  AddWork() {
    if (this.hoursOfWork > 6) {
      this.salary += 5;
    }
  }
}

const employee1 = new Employee(450, 7);
employee1.getInfo();
employee1.AddSal();
employee1.AddWork();
console.log("Final Salary: $" + employee1.salary);

const employee2 = new Employee(550, 5);
employee2.getInfo();
employee2.AddSal();
employee2.AddWork();
console.log("Final Salary: $" + employee2.salary);
