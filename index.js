const express=require("express");
const app=express();
const port=3000;

app.set("view engine", "ejs");
app.set("views", "./views");


app.use(express.static("public"));

app.get ("/",(req,res)=>{
  res.render("home");
});

app.get("/aboutme", (req, res)=> {
  res.render("aboutme");
});

app.get("/projects", (req, res)=> {
  res.render("projects");
});

app.get ("/contact",(req,res)=>{
  res.render("contact");
});

app.use((req,res)=>{
  res.status(404).render("404");
});

app.listen(port);
