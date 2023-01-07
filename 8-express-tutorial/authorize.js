// for 10-middleware-use chapter

const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === 'john') {
    console.log(req.query);
    req.user = { name: 'john', id: 3 };
    next();
  } else {
    res.status(401).send('Unauthorized');
    return;
  }
  //   console.log('authorize');
  //   next();
};

module.exports = authorize;
