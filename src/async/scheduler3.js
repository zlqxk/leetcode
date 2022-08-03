// 假设请求API为
function request(params) {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(params), params);
    });
}

// 最多处理3个请求的调度器
function Scheduler(list = [], limit = 2) {
  let count = 0;
  const len = list.length;
  const result = [];

  function run(resolve) {
    if (count < limit) {
      count++;
      const last = list.shift();
      if (last) {
        last[0]().then((res) => {
          result[last[1]] = res;
          if (result.length === len) {
            resolve(result);
            return;
          }
          count--;
          run(resolve);
        });
      }
    }
  }

  return new Promise((resolve) => {
    list = list.map((item, index) => [item, index]);
    list.forEach(() => run(resolve));
  });
}

Scheduler([request(1000), request(300), request(600), request(800)]).then(
  console.log
);
