const express = require("express"),
  app = express(),
  ejs = require('ejs'),
  client = new (require("discord.js")).Client()
const Badge = require("./Badge");

client.on("ready", async () => {
  console.log('[BOT] Iniciado')
  await client.user.setStatus("idle");
});

app.set("view engine", "ejs");
app.use(express.static("public"))


app.use(function(req, res, next) {
  res.removeHeader("x-powered-by")
  next();
});

app.post("*", async (req, res) => {
  return res.send('nao')
});


app.get("/", async (req, res, next) => {
  const laura = await client.users.fetch("272892603429552129")
  const nanda = await client.users.fetch("135626558667882496")
  const destroy = await client.users.fetch("317361174230335490")
  const psy = await client.users.fetch("789217114056949841")

  const server = await client.guilds.fetch("1059212765220319273")


  return res.render("index", {
    laura,
    nanda,
    destroy,
    psy,
  });
});

app.get("/webhooksender", async (req, res, next) => {
  return res.render("webhook", {
  });
});

app.get("/kaue", async (req, res, next) => {
  return res.render("kaue", {
  });
});


app.use(function(req, res) {
  res.status(404).redirect('https://youtu.be/SnZBwzj8Zyw');
});

client.login(process.env.TOKEN);

app.listen(process.env.PORT, () => {
  console.log('[EXPRESS] Iniciado')
});

setTimeout(() => process.exit(), 600000)