const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
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

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc   Update goals
// @route  Update /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc   Delete goals
// @route  Delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const deleteGoal = await Goal.findByIdAndRemove(req.params.id);
  res.status(200).json(deleteGoal);
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
