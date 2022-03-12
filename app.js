require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");
const authRouter = require("./routes/auth.routes");
const cardRouter = require("./routes/cards.routes");
const favRouter = require('./routes/favorite.routes');
const protectedRoute = require("./routes/protected.routes");

const app = express();

require("./config")(app);

app.use("/api/protected", isAuthenticated, protectedRoute);
app.use("/auth", authRouter);
app.use("/cards", cardRouter);
app.use('/fav', favRouter);

require("./error-handling")(app);

module.exports = app;