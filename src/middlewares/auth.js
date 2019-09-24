const jwt = require("jsonwebtoken");
// @ts-ignore

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");

  // @ts-ignore
  if (!parts.length === 2)
    return res.status(401).send({ error: "Token invalid" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  jwt.verify(token, process.env.APP_HASH, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid" });

    res.userId = decoded.id;
    return next();
  });
};
