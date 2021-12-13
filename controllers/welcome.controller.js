const get_welcome = (req, res) => {
  res.sendFile(process.cwd() + "../index.html");
};

module.exports = {
  get_welcome,
};
