require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

// Minimal CORS Configuration
const allowedOrigins = [
  'https://autopartocean.com',        // Your production domain
  'https://www.autopartocean.com',
  'https://autopartocean-eight.vercel.app',
  'https://autopartocean-fnps-projects.vercel.app',
  'https://autopartocean-git-master-fnps-projects.vercel.app',     // WWW variant
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET','POST', 'OPTIONS'],       // Only needed methods
  credentials: true,
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Origin:", req.headers.origin);
  next();
});

app.get("/", (req, res) => {
  res.send("AutoPart Ocean Backend is Running!");
});

app.use("/api/form", formRoutes);

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`))
  .on('error', (err) => {
    console.error('Server failed to start:', err);
  });
