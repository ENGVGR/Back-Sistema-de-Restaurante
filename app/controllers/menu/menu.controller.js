/* eslint-disable camelcase */
// eslint-disable-next-line import/no-import-module-exports
import execSQLQuery from "../../sqlQuerry";

const createMenu = (req, res) => {
  const { users_id } = req.body;
  const title = req.body.title.substring(0, 255);
  const description = req.body.description.substring(0, 1000);
  execSQLQuery(
    `insert into menus(title, description, users_id) values ('${title}', '${description}', ${users_id});`,
    res
  );
};

const getAllMenu = (req, res) => {
  execSQLQuery("SELECT * FROM menus", res);
};

const updateTitleMenu = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  execSQLQuery(
    `UPDATE menus SET menus.title = '${title}' WHERE menus.id=${id}`,
    res
  );
};

const updateDescriptionMenu = (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  execSQLQuery(
    `UPDATE menus SET menus.description = '${description}' WHERE menus.id=${id}`,
    res
  );
};

const deleteMenu = (req, res) => {
  const { id } = req.params;
  execSQLQuery(`DELETE FROM menus WHERE id=${id}`, res);
};

module.exports = {
  createMenu,
  getAllMenu,
  updateTitleMenu,
  updateDescriptionMenu,
  deleteMenu,
};
