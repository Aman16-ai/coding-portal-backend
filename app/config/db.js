const db = require("../model/index")

const configDB = async () => {
  try {
    await db.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};


module.exports = configDB