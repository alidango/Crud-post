const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    throw error;
  }
};

module.exports = connect;
