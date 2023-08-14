const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const math = require("mathjs");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/calculate", (req, res) => {
  try {
    const { expression } = req.body;
    const result = math.evaluate(expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: "Invalid expression" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
