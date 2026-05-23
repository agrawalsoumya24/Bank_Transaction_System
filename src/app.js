const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors") 


const app = express();
app.use(cors({                 // 👈 ADD THIS (IMPORTANT)
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// Routes
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRoutes = require("./routes/transaction.routes");
//Use Routes


app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)
app.use("/api/transactions",transactionRoutes)


module.exports= app;