require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

async function startServer() {
  await connectDB();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Backend is listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start backend:", error);
  process.exit(1);
});
