const log = (info) => (data) => {
  console.log(info, data);
  return data;
};

module.exports = {
  log,
};
