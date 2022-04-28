const express = require("express");
const sendingMail = require("./config/configMail");
const app = express();

app.use(express.json());

app.post("/send", async (req, res) => {
  try {
    const listUser = req.body.listUser;
    await sendingMail(listUser);
    return res.send(`Send Mail Easy!`);
  } catch (error) {
    return res.json({ error });
  }
});

app.listen(3000, () => {
  console.log(`Running`);
});
