const express=require("express");
const app=express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
