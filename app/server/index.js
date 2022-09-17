const express = require("express");
const costumerRoute = require("../routes/costumer");
const itemRoute = require("../routes/item");
const menuRoute = require("../routes/menu");
const orderRoute = require("../routes/order");
const orderItensRoute = require("../routes/orderItens");
const usersRoute = require("../routes/users");

const app = express();

app.use(express.json());

app.use("/costumer", costumerRoute);
app.use("/item", itemRoute);
app.use("/menu", menuRoute);
app.use("/order", orderRoute);
app.use("/orderItens", orderItensRoute);
app.use("/users", usersRoute);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});
