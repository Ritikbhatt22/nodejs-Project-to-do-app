
// const Task = require("../models/tasks");

// module.exports.addtask =function (req, res){  
//   console.log("gyyuyuvyuvyuvyuv")
//   let obj=  {
//     description: req.body.description,
//     category: req.body.category,
//     dueDate:req.body.dueDate,
//   }  
//   Task.create(obj,function (err, tasklist) {
//         if (err) {
//           console.log(err, "errir we get");
//           return err;
//         } else {
//           console.log(tasklist, "horray task added sucessfully");
//           // return res.redirect("/");
//         }
//       }
//     );
//   }