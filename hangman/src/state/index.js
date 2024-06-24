export default class State {
  static getInstance() {
    if (!State.instance) {
      State.instance = new State();
    }
    return State.instance;
  }

  increase = () => {
    this.counter += 1;
  };

  reset = () => {
    this.counter = 0;
  };
}
