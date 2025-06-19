// db/queries/employees.js
const db = require('../index');

const createEmployee = (employee) => {
  const { name, birthday, salary } = employee;
  return db.query('INSERT INTO employees (name, birthday, salary) VALUES (<div class="katex-block">1, </div>2, $3) RETURNING *;', [name, birthday, salary])
    .then(result => result.rows[0]);
};

module.exports = { createEmployee };
