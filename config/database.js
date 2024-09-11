const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.CLUSTER_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // Increase the timeout to 5 seconds
    })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
