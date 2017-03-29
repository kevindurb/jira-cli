const log = (info) => (data) => {
  console.log(info, data);
  return data;
};

const pipe = value => () => value;

const dataProp = R.propOr({}, 'data');

module.exports = {
  log,
  pipe,
  dataProp,
};
