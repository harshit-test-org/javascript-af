module.exports = async () => {
  // tslint:disable-next-line
  await global['httpServer'].close();
  return null;
};
