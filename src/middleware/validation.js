export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    if (err.errors.length > 0) {
      const array = err.errors.map((error) => error.message);
      return res.status(400).send(array);
    }
    return res.status(400).send(err.errors[0].message);
  }
};