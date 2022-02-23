class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    this.numbers.reduce();
  }

  reset() {}
}

const sumApp = new SumApp();

SumApp.addNumber(1);
SumApp.addNumber(2);
SumApp.getSum();
