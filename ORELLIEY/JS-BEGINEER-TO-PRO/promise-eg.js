let promise = new Promise(function (resolve, reject) {
  let x = 20;
  if (x > 10) {
    resolve(x);
  } else {
    reject("TO LOW ");
  }
});

promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
