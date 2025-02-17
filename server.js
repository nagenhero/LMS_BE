import express from "express";
const app = express();
const PORT = 9001;
//SERVER STATUS
app.get("/", (req, res) => {
  res.json({
    message: "its live healthy",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
