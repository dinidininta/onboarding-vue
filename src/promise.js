const fetchApi = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('foo');
  }, 600);
});

const doCalculation = (result) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(result);
  }, 300);
});

const runScheduler = () => {
  fetchApi().then((value) => doCalculation(value).then((result) => {
    console.log(result);
  }));
};

runScheduler();
