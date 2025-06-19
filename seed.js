// db/seed.js
const { Client } = require('pg');
const employees = require('./employees.json'); // Assuming employees.json exists with employee data
const { createEmployee } = require('./queries/employees');

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
