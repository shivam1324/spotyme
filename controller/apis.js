require('dotenv').config();

exports.home=async (req, res, next) => {
    res.render('dashboard')
}
