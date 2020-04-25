const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Job = require('../models/job')

router.get('/', (req,res) => 
Job.findAll()
.then(jobs => {
  console.log(jobs)
  res.sendStatus(200)
})
.catch(err => console.log('ERROR' + err)))

module.exports = router