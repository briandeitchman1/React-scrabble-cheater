const express = require("express");
const router = express.Router();
const { getWords, addFavoriteWord, updateFavoriteWord, deleteFavoriteWord } = require("../controllers/scrabbleController")

router.route('/').get(getWords).post(addFavoriteWord);
router.route('/:id').put(updateFavoriteWord).delete(deleteFavoriteWord);


module.exports = router;