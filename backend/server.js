import dotenv from "dotenv";
dotenv.config();

console.log("DEBUG MONGO_URI =", process.env.MONGO_URI);

import app from "./src/app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
