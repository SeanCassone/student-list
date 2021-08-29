const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/studentDB",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("connection successful");
    } else {
      console.log("connection unsuccessful" + err);
    }
  }
);

require("./student.model");
