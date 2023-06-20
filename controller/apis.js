require('dotenv').config();

exports.home=async (req, res, next) => {
    res.send('Welcome to spotyme');
}

exports.convert=async (req, res, next) => {
    const playlist=req.playlist;
    
    if (!playlistId) {
        res.status(400).send('Invalid YouTube playlist URL.');
        return;
    }
}
