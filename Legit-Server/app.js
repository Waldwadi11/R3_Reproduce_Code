
// Import Statements
const createError = require("http-errors");
const http = require("http");
const WebSocket = require("ws");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

//---------- DATABASE CONNECTION -------------
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose
.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
//----------------------------------------------

const indexRouter = require("./routes/index");

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Middleware Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Session Configuration
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      // Additional options if needed
    }),
    secret: process.env.MONGO_SECRET,
    resave: false,
    saveUninitialized: false,
    secure: process.env.NODE_ENV === "production" ? true : false,
  })
);

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", indexRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
});

// Error Handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// SSL Options
const sslOptions = {
  key: fs.readFileSync("keys/server.key"),
  cert: fs.readFileSync("keys/server.crt"),
  rejectUnauthorized: false,
};

// Create HTTPS Server
const server = https.createServer(sslOptions, app);

// Initialize and Set Up WebSocket Server
const wss = new WebSocket.Server({ server: server });
let last20 = []; // Store 20 most recent messages

wss.on("connection", (ws, req) => {
  // Obtain user name from request's session cookie
  ws.upgradeReq = req;

  ws.on("message", (data) => {
    // Echo each message received to all clients
    data = JSON.parse(data);
    const date = new Date();
    const obj = { user: data.username, message: data.message, datetime: date };
    last20.push(JSON.stringify(obj)); // Log message
    last20 = last20.slice(-20); // Only keep 20 most recent
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(obj)); // Echo message to all clients
      }
    });
  });
});

// **Important**: Start the server and listen on port 3001
const PORT = process.env.PORT || 3001; // Use the port from the .env file or default to 3001
if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
  });
}
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed on SIGINT.");
    process.exit(0);
  });
});

module.exports = { app: app, server: server };

