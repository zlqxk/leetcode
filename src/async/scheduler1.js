/**
  const do = schedule(2)
  do(promise).then(res => ...)
  do(promise).then(res => ...)
  do(promise).then(res => ...)
  do(promise).then(res => ...)
 */

function schedule(limit) {
  const queue = [];
  let count = 0;

  function start() {
    if (count < limit) {
      count++;
      const last = queue.shift();
      if (last) {
        last[0]().then((res) => {
          last[1](res);
          count--;
          start();
        });
      }
    }
  }

  return (promise) => {
    return new Promise((resolve) => {
      queue.push([promise, resolve]);
      start();
    });
  };
}

const promise1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

const promise2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 300);
  });

const promise3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 600);
  });

const promise4 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(4);
    }, 400);
  });

const promise5 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 4000);
  });

const run = schedule(2);
run(promise5).then((res) => console.log(res));
run(promise1).then((res) => console.log(res));
run(promise2).then((res) => console.log(res));
run(promise3).then((res) => console.log(res));
run(promise4).then((res) => console.log(res));
