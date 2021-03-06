const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Job = require("../models/job");
const Sequelize = require('sequelize')
const Op = Sequelize.Op
//GET JOB LIST
router.get("/", (req, res) =>
  Job.findAll()
    .then((jobs) => {
      res.render("jobs", {
        jobs,
      });
    })
    .catch((err) => console.log("ERROR" + err))
);

//DISPLAY ADD A JOB FORM
router.get("/add", (req, res) => res.render("add"));

//ADD A JOB
router.post("/add", (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  let errors = [];
  //Validate Fields

  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!technologies) {
    errors.push({ text: "Please some technologies" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }

  // Check for Errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email,
    });
  } else {
    if (!budget) {
      budget = "Unknown"; 
    } else {
      budget = `$${budget}`
    }
    //Make lowercase and remove space after comma
    technologies = technologies.toLowerCase().replace(/, /g, ',')
    //Insert into table
    Job.create({
      title,
      technologies,
      budget,
      description,
      contact_email,
    })

      .then((job) => res.redirect("/jobs"))
      .catch((err) => console.log("ERROR" + err));
  }
});

//Search for Jobs
router.get('/search', (req,res) => {
  let { term } = req.query

  //Make Lowercase
  term = term.toLowerCase()

  Job.findAll({where: {technologies: {[Op.like]: '%' + term + '%'} }})
  .then(jobs => res.render('jobs', {jobs}))
  .catch(err => console.log(err))
})

module.exports = router;
