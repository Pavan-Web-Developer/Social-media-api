const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://jordanpac97:8gApq9kb65uiAU6q@cluster0.5vqoh.mongodb.net/")
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
