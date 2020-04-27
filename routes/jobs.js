const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/job')

//GET JOB LIST
router.get('/', (req,res) => 
Job.findAll()
.then(jobs => {
  res.render('jobs', {
    jobs
  })

})
.catch(err => console.log('ERROR' + err)))

//DISPLAY ADD A JOB FORM
router.get('/add', (req,res) => res.render('add'))

//ADD A JOB
router.post('/add', (req,res) => {
  const data = {
    title: 'Simple wordpress website',
    technologies: 'wordpress, php, html, css',
    budget: '$1000',
    description: 'Waze wufoo kippt, glogster. Zinch groupon sifteo palantir, disqus plugg. Weebly spotify bubbli bitly zoho, meebo divvyshot jajah eduvant tumblr, fleck wakoopa gooru. Twitter glogster cotweet mobly zoho kosmix, fleck waze zappos.',
    contact_email:'anisa2@mohamed.com'
  }
  let { title, technologies, budget, description, contact_email } = data;
  Job.create({
    title, 
    technologies, 
    budget, 
    description, 
    contact_email
  })
  .then(job => res.redirect('/jobs'))
  .catch(err => console.log('ERROR' + err))
})
module.exports = router