// db/seed.js
const { Client } = require('pg');
const employees = require('./employees.json'); // Assuming employees.json exists with employee data
const { createEmployee } = require('./queries/employees');

import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 15; i++) {
    const employee = {
      name: "Employee " + i,
      birthday: "1001-10-01",
      salary: Math.floor(Math.random() * 500000),
    };
    await createEmployee(employee);
  }
}

const seedEmployees = async () => {
  const client = new Client();
  try {
    await client.connect();
    for (const employee of employees) {
      await createEmployee(employee);
    }
    console.log('Employees seeded successfully!');
  } catch (error) {
    console": "1990-05-10", "salary": 60000 },
  { "name": "Bob Johnson", "birthday": "1985-12-20", "salary": 75000 },
  { "name": "Charlie Brown", "birthday": "1992-08-15", "salary": 55000 },
  { "name": "David Lee", "birthday": "1988-03-25", "salary": 80000 },
  { "name": "Eve Williams", "birthday": "1995-07-01", "salary": 65000 },
  { "name":

   // db/queries/employees.js
const db = require('../index'); // Suppress ESM conversion warning or convert to ESM if desired

const createEmployee = (employee) => {
  const { name, birthday, salary } = employee;
  return db.query('INSERT INTO employees (name, birthday, salary) VALUES ($1, $2, $3) RETURNING *;', [name, birthday, salary])
    .then(result => result.rows[0]);
};

// Conceptual seeding approach (in a separate file or within your app's initialization).  This would be executed once or on database reset.
// Requires a way to connect to the database (e.g., using 'pg' or 'mysql2' or similar Node.js database driver)

const seedEmployees = async (dbConnection) => {
    const employeesToSeed = [
        { name: 'Alice Smith', email: 'alice.smith@example.com', department: 'HR', salary: 60000.00 },
        { name: 'Bob Johnson', email: 'bob.johnson@example.com', department: 'IT', salary: 75000.00 },
        // ... more employees (at least 10)
        { name: 'Charlie Brown', email: 'charlie.brown@example.com', department: 'Sales', salary: 80000.00 },
        { name: 'Diana Prince', email: 'diana.prince@example.com', department: 'Marketing', salary: 90000.00 },
        { name: 'Eve Williams', email: 'eve.williams@example.com', department: 'Finance', salary: 65000.00 },
        { name: 'Frank Miller', email: 'frank.miller@example.com', department: 'IT', salary: 70000.00 }
    ];
    // Implementation for seeding would go here
};

module.exports = { createEmployee };
