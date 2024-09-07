const db = require("../model/index")
const mongoose = require("mongoose")
const configDB = async () => {
  //this is for mysql
  // try {
  //   await db.sync();
  //   console.log("Connection has been established successfully.");
  // } catch (error) {
  //   console.error("Unable to connect to the database:", error);
  // }
  const m = await mongoose.connect(process.env.mongodb_url)
  console.log("Database successfully connected")

};


module.exports = configDB