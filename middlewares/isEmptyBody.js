// import { HttpError } from "../helpers/index.js";

// const isEmptyBody = (req, res, next) => {
//   if (!Object.keys(req.body).length) {
//     return next(HttpError(400, "missing fields"));
//   }
//   next();
// };

// export default isEmptyBody;

import Joi from "joi";

const isEmptyBody = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join("; ");
    return res.status(400).json({ message: errorMessage });
  }

  next();
};

export default isEmptyBody;
