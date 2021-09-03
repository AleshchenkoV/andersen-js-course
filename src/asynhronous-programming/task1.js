const createCb = str => () => console.log(str);

function foo(x, cb) {
  if (x <= 10) {
    console.log('x <= 10');
    return;
  }
  console.log('x > 10');
  cb();
}

foo(5, createCb('cb'));
foo(20, createCb('cb'));
