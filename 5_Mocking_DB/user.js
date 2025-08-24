const db = require("./db");

async function getUser(id) {
  return await db.findUserById(id);
}

module.exports = getUser;
