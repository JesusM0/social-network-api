const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);

router.route('/:id').get(getThoughtById).put(updateThought);

router.route('/:userId').post(createThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

router.route('/:userId/:thoughtId').delete(deleteThought);

module.exports = router;
