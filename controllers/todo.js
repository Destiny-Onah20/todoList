const todoModel = require("../models/users");

exports.createTodo = async(req,res)=>{
  try {
    // const { content } = req.body;
    const addTodo = await todoModel.create(req.body);
    return res.status(201).json({
      data: addTodo
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

exports.done = async(req,res)=>{
  try {
    const id = req.params.id;
    const turnTrue = await todoModel.update({done: true}, {where: {id: id}})
      return res.status(200).json({
        message: "This task has been completed.",
        data: turnTrue
      })
    
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

exports.allTodo = async(req,res)=>{
  try {
    const all = await todoModel.findAll();
    res.status(200).json({
      message: "All todo",
      length: all.length,
      data: all
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

exports.editTodo = async(req,res)=>{
  try {
    const todoId = req.params.todoId;
    const edited = await todoModel.update(req.body, {where: {id: todoId}});
    if(edited[0] === 1){
      return res.status(200).json({
        message: "Task editted Successfully.",
      })
    }else{
      return res.status(400).json({
        message: "This is wrong",
      })
    }
    
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

exports.deleteTodo = async ( req , res ) => {
  try {
    const todoId = req.params.todoId;
    const del = await todoModel.destroy({where: {id: todoId}});
    return res.status(200).json({
      message: "Deleted successfully",
      data: del
  })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

exports.deleteDone = async ( req , res ) => {
  try {
      await todoModel.destroy({where: {done: true}})
      return res.status(200).json({
        message: "All done tasks deleted successfully"
      })

  } catch ( error ) {
    res.status(400).json({
      message: error.message
    })
  }
};


exports.deleteAllTask = async ( req , res ) => {
  try {
    await todoModel.destroy({where: {all: true}});
    res.status(200).json({
      message: "All tasks deleted."
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};