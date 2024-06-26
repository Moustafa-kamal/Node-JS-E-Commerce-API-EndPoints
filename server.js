const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: "config.env" });
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");
const dbConnection = require("./config/database");
// Routes
const categoryRoute = require("./routes/category.router");
const subCategoryRoute = require("./routes/subCategory.router");
const brandRoute = require("./routes/brand.router");
const productRoute = require("./routes/product.router");
const userRoute = require("./routes/User.router");
const AuthRoute = require("./routes/Auth.router");
const orderRoute = require("./routes/order.router");
const CartRoute = require("./routes/shoppingCart.router");
const reviewRoute = require("./routes/review.router");
const AdminRoute = require("./routes/admin.route");
const paymentRoutes = require("./routes/PaymentSuccess.route");
// const CartRoute = require("./routes/shoppingCart.router");
/*-----------------------------------------------------------------*/
// Connect with db
dbConnection();
/*-----------------------------------------------------------------*/
// express app
const app = express();
app.use(cors());
/*-----------------------------------------------------------------*/
// Middlewares to parse json string into a javascript object
app.use(express.json());
/*-----------------------------------------------------------------*/
// Serve uploaded images statically
app.use(express.static(path.join(__dirname, "uploads")));
/*-----------------------------------------------------------------*/
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}
/*-----------------------------------------------------------------*/
// Routes
app.get("/", (req, res) => {
  res.send("E-Commerce App");
});
//Success URL
app.use("/api/v1/payment",paymentRoutes)
/*-----------------------------------------------------------------*/
// Category Route
app.use("/api/v1/categories", categoryRoute);
/*-----------------------------------------------------------------*/
// SubCategory Route
app.use("/api/v1/subcategories", subCategoryRoute);
/*-----------------------------------------------------------------*/
// Brand Route
app.use("/api/v1/brands", brandRoute);
/*-----------------------------------------------------------------*/
// Product Route
app.use("/api/v1/products", productRoute);
/*-----------------------------------------------------------------*/
//user route
app.use("/api/v1/users", userRoute);
/*-----------------------------------------------------------------*/
//Auth route
app.use("/api/v1/auth", AuthRoute);
/*-----------------------------------------------------------------*/
//order Route
app.use("/api/v1/orders", orderRoute);
/*-----------------------------------------------------------------*/
//shoppingCart Route
app.use("/api/v1/carts", CartRoute);
/*-----------------------------------------------------------------*/
//Admin Route
app.use("/admin", AdminRoute);
/*-----------------------------------------------------------------*/
// app.use("/api/v1/stripe", stripe);
/*-----------------------------------------------------------------*/
// Review Route
app.use("/api/v1/reviews", reviewRoute);
/*-----------------------------------------------------------------*/
app.all("*", (req, res, next) => {
  // Create error and send it to error handling middleware
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});
/*-----------------------------------------------------------------*/
// Global error handling middleware for express
app.use(globalError);
/*-----------------------------------------------------------------*/
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}.....`);
  console.log(`Server running at http://localhost:${port}.....`);
});
/*-----------------------------------------------------------------*/
// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
/*-----------------------------------------------------------------*/
