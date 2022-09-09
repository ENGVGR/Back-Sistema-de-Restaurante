const express = require("express");
const costumerRoute = require("../routes/costumer");

const app = express();

app.use(express.json());

app.use("/costumer", costumerRoute);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});
