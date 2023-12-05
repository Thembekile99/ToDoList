
////create////

const Task = require("../model/task")

exports.create = async (req, res, next) => {
  const { name, number } = req.body
  try {

    await Task.create({
      name, number

    }).then(task =>
      res.status(200).json({
        message: "Task successfully created",
        task,
      })
    )
  } catch (error) {
    res.status(401).json({
      message: "Task not successful created",
      error: error.mesage,
    })
  }
}


//read all the task//

exports.read = async (req, res) => {
  try {
    const task = await Task.find();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

//Update an specific item// 


exports.update = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id,
       req.body,{
       new: true,
       });
       res.json(task);

      } catch (error){

        res.status(400).json({error: error.mesage});
      }
  }


//delete//

exports.remove = async (req, res) => {

    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }