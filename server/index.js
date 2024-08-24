const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const apiRoutes = require("./routes/api");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI at /docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { 
  swaggerOptions: { 
    // Modify Swagger UI options if needed
  }
}));

// Use the API routes under /api
app.use('/api', apiRoutes);

// Serve the frontend React app
app.use(express.static(path.join(__dirname, "frontend/build")));

// Fallback to serve the frontend for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api/docs`);
});
