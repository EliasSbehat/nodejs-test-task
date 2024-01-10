const tblName = "users";

module.exports = {
  add: function (con, data, callback) {
    con.query(
      `INSERT INTO ${tblName} SET 
            name = ${con.escape(data?.name)}, 
            email = ${con.escape(data?.email)}`,
      callback
    );
  },
  update: function (con, data, callback) {
    con.query(
      `UPDATE ${tblName} SET 
            name = ${con.escape(data?.name)}, 
            email = ${con.escape(data?.email)}
            WHERE id = ${con.escape(data?.id)}`,
      callback
    );
  },
  getAll: function (con, callback) {
    con.query(`SELECT * FROM ${tblName}`, callback);
  },
  getById: function (con, id, callback) {
    con.query(
      `SELECT * FROM ${tblName} WHERE id = ${con.escape(id)}`,
      callback
    );
  },
  getByEmail: function (con, email, callback) {
    con.query(
      `SELECT * FROM ${tblName} WHERE email = ${con.escape(email)}`,
      callback
    );
  },
  deleteById: function (con, id, callback) {
    con.query(`DELETE FROM ${tblName} WHERE id = ${con.escape(id)}`, callback);
  },
};
