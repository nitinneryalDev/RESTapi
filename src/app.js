const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;
const studentRouter = require("./routers/students")




app.use(studentRouter)
app.use(express.json());



app.listen(port, () => {
  console.log(`connection is setted up in the port ${port} `);
});
