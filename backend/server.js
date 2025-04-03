require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

// Minimal CORS Configuration
const allowedOrigins = [
  'https://autopartocean.com',        // Your production domain
  'https://www.autopartocean.com'     // WWW variant
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'OPTIONS'],       // Only needed methods
  credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/api/form", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
