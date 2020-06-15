const Task = require("../models/tasks");

module.exports.showList = function (req, res) {

  Task.find({}, function (err, result) {
    if (err) {
      console.log("err");
    } else {
      return res.render("index", {
        title: "hello world",
        contact: result,
      });
    }
  });
};

module.exports.addtask = function (req, res) {
  console.log("gyyuyuvyuvyuvyuv");
  let obj = {
    description: req.body.description,
    category: req.body.category,
    dueDate: req.body.dueDate,
  };
  Task.create(obj, function (err, tasklist) {
    if (err) {
      console.log(err, "errir we get");
      return err;
    } else {
      console.log(tasklist, "horray task added sucessfully");
      return res.redirect("/");
    }
  });
};

module.exports.deleteTask = function (req, res) {
  // let id = req.query.delete;

  
  let game = req.body.check;
  console.log(game,"game")
 

  Task.findByIdAndDelete(game, (err) => {
    if (err) {
      console.log(err, "error");
      return err;
    }
    return res.redirect("/");
  });

};




// module.exports.getTask = function (req, res) {
//   console.log("gyyuyuvyuvyuvyuv");

//    let obj=req.body.check;
 
// console.log(obj,"adasddsadasdasdsadasdsdasad")

   
  
//     Task.findByIdAndDelete(obj, (err) => {
//       if (err) {
//         console.log(err, "error");
//         return err;
//       }
//       return res.redirect("/");
//     });
  
  

// };

// module.exports.deleteSingleTask=function(req,res){


//   Task.deleteOne( (err) => {
//     if (err) {
//       console.log(err, "error");
//       return err;
//     }
//     return res.redirect("/");
//   });
// }