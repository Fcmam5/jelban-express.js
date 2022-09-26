import express from "express";
import bodyParser from "body-parser";
import { signupController } from "./signup.controller";
import { gmailController } from "./gmail.controller";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/signup", signupController);
app.post("/gmail", gmailController);

app.all("*", (_, res) => {
  console.log("not found");
  return res.status(404).json();
});

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));
