import express from "express";
const app = express();
app.use(express.json())

import cors from "cors"
app.use(cors());



import connection from "./database/connection.js"
connection();

app.get("/", (req, res) => {
  res.send('Hello World!')
})


// import adminRouter from "./routers/adminrouter.js"
// app.use(adminRouter);

import userRouter from "./routers/userRouter.js"
app.use(userRouter);

import transactionRouter from "./routers/transactionsRouter.js"
app.use(transactionRouter);


app.listen(2000, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log("Backend is running on port 2000");
  }
});
