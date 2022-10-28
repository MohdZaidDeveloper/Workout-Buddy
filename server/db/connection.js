const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection is Established !");
  })
  .catch((err) => {
    console.log(`Error is: ${err}`);
  });
