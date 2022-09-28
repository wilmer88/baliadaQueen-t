// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const PORT = process.env.PORT || 3001;

// // const routes = require("./routes");

// // const cors = require("cors");
// const app = express();
// // app.use(cors());


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/taco-stand",{
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
    
// //   }).then(() => console.log("MongoDB has been connected"))
// // .catch((err) => console.log(err));



// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   };
//   app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`);
//   });

// // app.get("*", function (req, res) {
// //   res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
// // });

// app.get("/api/config", (req, res) => {
//   res.json({"error":false})
  
//   });



require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
// const path = require("path");


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/baliada-queen", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
