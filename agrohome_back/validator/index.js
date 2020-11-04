const { check, validationResult } = require("express-validator");

exports.validationChecks = [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Invalid Email address').isEmail().isLength({min:4, max: 32}).withMessage('Email should be 4 to 32 long'),
    check('password', 'Password required').notEmpty().isLength({min:4}).withMessage('Password must be atleast 4 long')
]

exports.validationErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors.mapped())
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}