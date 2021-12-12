const index = async (req, res) => {
  res.sendFile(process.cwd() + "../index.html");
};

module.exports = {
  index,
};
