const app = require("./app");
const cors = require('cors');
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();
app.use(cors());
cloudinary.config({
  cloud_name: 'dgzflw92j',
  api_key: "176225988967646",
  api_secret: "zpLqypFl1gBTyVyQsVGSluSRXLU",
});

app.listen("4000", () => {
  console.log(`Server is running on port ${"4000"}`);
});
