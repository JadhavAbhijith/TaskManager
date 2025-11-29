import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "API documentation for Task Management App",
    },
  },
  apis: ["./src/routes/v1/*.js"], // update path if needed
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
