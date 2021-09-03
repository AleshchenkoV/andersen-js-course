function parseJSON(jsonStr, succesCb, failureCb) {
  let result;
  try {
    result = JSON.parse(jsonStr);
  } catch (e) {
    failureCb(result);
    return e;
  }
  return succesCb(result);
}

function succesCb(result) {
  console.log('Success parse!');
  return result;
}

function failureCb(error) {
  console.log('Failure parse!');
  return error;
}

parseJSON('{x}', succesCb, failureCb);
parseJSON('{"x": 10}', succesCb, failureCb);
