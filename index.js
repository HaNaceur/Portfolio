const express=require("express");
const app=express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

require("dotenv").config();


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.json());


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

app.post("/contact",(req,res)=>{


  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure:true,
    port:465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: req.body.email,
    to: process.env.GMAIL_USER,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.log(error);
      res.send("error");
    }else{
      console.log("Email sent : "+ info.response);
      res.send("success");
    }
  });

});

app.use((req,res)=>{
  res.status(404).render("404");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
