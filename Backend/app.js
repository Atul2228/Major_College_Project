const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(cors({
    origin: " http://localhost:5173",
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


// connfig
if (process.env.NODE_ENV !== "PODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    })
}
//import routes
const user = require("./controller/user.controller");
const shop = require("./controller/shop.controller");
const product = require("./controller/product.controller");
app.use("/api/v2/user", user)
app.use("/api/v2/shop", shop)
app.use("/api/v2/product", product)

// it's for ErrorHandling

app.use(ErrorHandler);


module.exports = app;