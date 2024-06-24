export default class Counter {
  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
  }

  static getInstance() {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  increase = () => {
    this.count += 1;
  };

  reset = () => {
    this.count = 0;
  };

  getCount = () => {
    return this.count;
  };
}
