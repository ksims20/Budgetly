const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const port = 5000;
const prisma = new PrismaClient();

//Makes sure that when data is sent back (in the form of JSON) that Express can read it
app.use(express.json());
// This is what you need to run the server and make the backend accessible
app.listen(5000, () => {
  console.log("Port is listening.");
});

//This is where id get the data from expense table
app.get("/prisma/expense", async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany(); // Fetches all the records from the expense table (await because it takes time)
    res.json(expenses); //Sends the data to the front end
  } catch (error) {
    res.status(500).json({ error: "Something went wrong! " });
  }
});

//This is where I get new expenses into the table
app.post("/prisma/expense", async (req, res) => {
  try {
    const newExpense = await prisma.expense.create({
      //Inserts the data into the database
      data: req.body, //Fetches data
    });

    res.json(newExpense); // sends back the created expense
  } catch (error) {
    res.status(500).json({ error: " Failed to create expense! " });
  }
});
