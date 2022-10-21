const asyncHandler = require("express-async-handler");

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc   Set goals
// @route  SET /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc   Update goals
// @route  Update /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

// @desc   Delete goals
// @route  Delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
