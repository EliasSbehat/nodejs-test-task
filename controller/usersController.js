const Users = require("../model/User");

module.exports = {
  /***
   * Create
   * @api {post} /users/add Create a user
   * @param {String} email the user email
   * @param {String} name the user name
   */
  add: function (req, res) {
    if (req.body?.email) {
      if (req.body?.name) {
        var datas = {
          name: req.body?.name,
          email: req.body?.email,
        };
        Users.getByEmail(req.con, req.body?.email, function (err, rows) {
          if (rows.length > 0) {
            res.send({ msg: "already-exist" });
          } else {
            Users.add(req.con, datas, function (err) {
              res.send({ msg: "saved" });
            });
          }
        });
      } else {
        res.send({ msg: "no-name" });
      }
    } else {
      res.send({ msg: "no-email" });
    }
  },
  /***
   * Update
   * @api {post} /users/update Update a user
   * @param {Number} id the user id
   * @param {String} email the user email
   * @param {String} name the user name
   */
  update: function (req, res) {
    if (req.body?.email) {
      if (req.body?.name) {
        var datas = {
          id: req.body?.id,
          name: req.body?.name,
          email: req.body?.email,
        };
        Users.getById(req.con, req.body?.id, function (err, rows) {
          if (rows.length > 0) {
            Users.update(req.con, datas, function (err) {
              res.send({ msg: "updated" });
            });
          } else {
            res.send({ msg: "invalid-ID" });
          }
        });
      } else {
        res.send({ msg: "no-name" });
      }
    } else {
      res.send({ msg: "no-email" });
    }
  },
  /***
   * Retrieve
   * @api {get} /users/get Retrieve all users
   */
  get: function (req, res) {
    Users.getAll(req.con, function (err, rows) {
      res.send(rows);
    });
  },
  /***
   * Retrieve by id
   * @api {get} /users/getById Get a user by id
   * @param {Number} id the user id
   */
  getById: function (req, res) {
    Users.getById(req.con, req.body?.id, function (err, rows) {
      res.send(rows);
    });
  },
  /***
   * Delete by id
   * @api {delete} /users/delete Get a user by id
   * @param {Number} id the user id
   */
  delete: function (req, res) {
    var id = req.body?.id;
    Users.getById(req.con, id, function (err, rows) {
      if (rows.length > 0) {
        Users.deleteById(req.con, id, function (err) {
          res.send({ msg: "deleted" });
        });
      } else {
        res.send({ msg: "invalid-ID" });
      }
    });
  },
};
