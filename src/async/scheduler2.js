class Scheduler {
  constructor() {
    this.queue = [];
    this.count = 0;
  }

  add(promiseCreator) {
    return new Promise((resolve) => {
      this.queue.push([promiseCreator, resolve]);
      this.start();
    });
  }

  start() {
    if (this.count < 2) {
      this.count++;
      const last = this.queue.shift();
      if (last) {
        last[0]().then((res) => {
          last[1](res);
          this.count--;
          this.start();
        });
      }
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(5000, "5");
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");

// output: 2 3 1 4
