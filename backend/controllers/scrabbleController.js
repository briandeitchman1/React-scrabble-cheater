// @desc Get words
// @route Get /api/scrabble
// @access public
const getWords = (req, res) => {
    res.status(200).json({ message: 'Get words' })
}
// @desc Add word to favorites list
// @route POST /api/scrabble
// @access private
const addFavoriteWord = (req, res) => {
    res.status(200).json({ message: 'Added favorite word' })
}
// @desc update word in favorites list
// @route update /api/scrabble/:id
// @access private
const updateFavoriteWord = (req, res) => {
    res.status(200).json({ message: `updated word ${req.params.id}` })
}
// @desc  delete word in favorites list
// @route DELETE /api/scrabble/:id
// @access private
const deleteFavoriteWord = (req, res) => {
    res.status(200).json({ message: `deleted word ${req.params.id}` })
}

module.exports = {
    getWords,
    addFavoriteWord,
    updateFavoriteWord,
    deleteFavoriteWord

}