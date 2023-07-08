const mongoose = require("mongoose");

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Connected to Mongo Successfully");
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectToMongo;