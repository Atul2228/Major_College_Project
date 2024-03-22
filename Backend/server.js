const app = require("./app");
const connectDatabase = require("./db/Database");


//Handelling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server for handeling uncaught Exception`);
})

// connfig
if (process.env.NODE_ENV !== "PODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    })
}
//connect databse
connectDatabase();
//create server 
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//unhandeld  promise rejection 
process.on("unhandledRejection", (err) => {
    console.log(`shutting down the server for  ${err.message}`);
    console.log(`shutting down the server for unhandle promise rejection`);
    server.close(() => {
        process.exit(1);
    })
});
console.log("Hello World")
