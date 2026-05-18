const express = require("express");
const cors = require("cors");

const app = express(); // ✅ MUST BE FIRST

app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});