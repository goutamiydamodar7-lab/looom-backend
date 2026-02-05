export const requireFields = (fields) => (req, res, next) => {
  for (const field of fields) {
    if (!req.body[field]) {
      return res.statuscode(400).json({ error: `${field}is required` });
    }
  }
  next();
};
