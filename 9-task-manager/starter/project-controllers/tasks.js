const Task = require('../models/task');
const asyncWrapper = require('../middleware/async-wrapper');
const { createCustomError } = require('../errors/custom-error');

// const getAllTasks = async (req, res) => {
//   try {
//     // the object in the find method is left empty so as to get all docunebts - see nongoose docs.
//     const tasks = await Task.find({});

//     res.status(200).json({ tasks: tasks });
//     // some extra stuffs/options that can be added - this applies to all the CRUD other methods as well.
//     // res.status(200).json({ tasks: tasks, amount: tasks.length });
//     // or even as below - just add extra spices as you wish - preferably stay simple
//     // res.status(200).json({
//     //   status: 'success',
//     //   data: {
//     //     tasks: tasks,
//     //     nbHits: tasks.length,
//     //   },
//     // });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };

// using the async wrapper method - but with all comments removed - you can do same for all the other CRUD methods as well.

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks: tasks });
});

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// };

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// const getTask = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOne({ _id: taskId });
//     if (!task) {
//       // this error will show if we have the correct id syntax/pattern
//       return res.status(404).json({ message: `no task with id: ${taskId}` });
//     }

//     res.status(200).json({ task });
//   } catch (error) {
//     // this error will show if we do not have the correct id syntax/pattern
//     res.status(500).json({ message: error });
//   }
// };

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    // this error will show if we have the correct id syntax/pattern
    // return res.status(404).json({ message: `no task with id: ${taskId}` });

    // or using the error handler middleware method to create a custom error
    // const error = new Error('Not Found');
    // error.status = 404;
    // return next(error);

    // or using the more advanced error handling method
    return next(createCustomError(`no task with id: ${taskId}`, 404));
  }

  res.status(200).json({ task });
});

// const updateTask = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOneAndUpdate(
//       { _id: taskId },
//       req.body,
//       // some extra options
//       {
//         // returns the updated task details
//         new: true,
//         // ensures that all the validators set in the schema are run
//         runValidators: true,
//       }
//     );
//     if (!task) {
//       // this error will show if we have the correct id syntax/pattern(number of characters)
//       return res.status(404).json({ message: `no task with id: ${taskId}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     // this error will show if we do not have the correct id syntax/pattern
//     res.status(500).json({ message: error });
//   }
// };

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate(
    { _id: taskId },
    req.body,
    // some extra options
    {
      // returns the updated task details
      new: true,
      // ensures that all the validators set in the schema are run
      runValidators: true,
    }
  );
  if (!task) {
    // this error will show if we have the correct id syntax/pattern(number of characters)
    // return res.status(404).json({ message: `no task with id: ${taskId}` });

    // or using the more advanced error handling method
    return next(createCustomError(`no task with id: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskId });
//     if (!task) {
//       // this error will show if we have the correct id syntax/pattern(number of characters)
//       return res.status(404).json({ message: `no task with id: ${taskId}` });
//     }
//     // you can flexibly use any of the options below - test them to clearly understand how they work.

//     res.status(200).json({ task });
//     // res.status(200).send();
//     // res.status(200).json({ task: null, status: 'success' });
//   } catch (error) {
//     // this error will show if we do not have the correct id syntax/pattern(number of characters)
//     res.status(500).json({ message: error });
//   }
// };

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    // this error will show if we have the correct id syntax/pattern(number of characters)
    // return res.status(404).json({ message: `no task with id: ${taskId}` });

    // or using the more advanced error handling method
    return next(createCustomError(`no task with id: ${taskId}`, 404));
  }
  // you can flexibly use any of the options below - test them to clearly understand how they work.

  res.status(200).json({ task });
  // res.status(200).send();
  // res.status(200).json({ task: null, status: 'success' });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
