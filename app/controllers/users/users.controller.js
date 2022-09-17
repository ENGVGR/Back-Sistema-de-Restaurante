/* eslint-disable camelcase */
// eslint-disable-next-line import/no-import-module-exports
import execSQLQuery from "../../sqlQuerry";

const createUsers = (req, res) => {
  const role = req.body.role.substring(0, 20);
  const name = req.body.name.substring(0, 200);
  const password = req.body.password.substring(0, 255);
  const email = req.body.email.substring(0, 200);
  execSQLQuery(
    `insert into users(name, email, password, role) values ('${name}', '${email}', '${password}', '${role}');`,
    res
  );
};

const getAllUsers = (req, res) => {
  execSQLQuery("SELECT * FROM hamburgueria.users", res);
};

const updateUsers = (req, res) => {
  const { id } = req.params;
  const role = req.body.role.substring(0, 20);
  const name = req.body.name.substring(0, 200);
  const password = req.body.password.substring(0, 255);
  const email = req.body.email.substring(0, 200);
  execSQLQuery(
    `UPDATE hamburgueria.users SET hamburgueria.users.name = '${name}', hamburgueria.users.email = '${email}', hamburgueria.users.password = '${password}', hamburgueria.users.role = '${role}' WHERE hamburgueria.users.id=${id};`,
    res
  );
};

const deleteUsers = (req, res) => {
  const { id } = req.params;
  execSQLQuery(`DELETE FROM hamburgueria.users WHERE id=${id}`, res);
};

module.exports = {
  createUsers,
  getAllUsers,
  updateUsers,
  deleteUsers,
};
