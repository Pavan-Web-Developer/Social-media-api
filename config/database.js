const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://jordanpac97:8gApq9kb65uiAU6q@cluster0.5vqoh.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // Increase the timeout to 5 seconds
    })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
