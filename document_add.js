var express = require('express');  
var router = express.Router();
var client = require('./extra/connection.js');

client.index({  
  index: 'gov1',
  id: '1',
  type: 'constituencies',
  body: {
    "ConstituencyName": "Login career credentials will be sent to his email box once it’s added by the HR Head. Regional Managers can have multiple HR Managers under his region.He is devised to add the cities and assign HR Managers under those cities.He can go through all the referral resumes which are uploaded by the employees and undergo the employees list who are under various cities in his region.",
    "url": "HR Head.html",
    "ConstituencyID": "HR Head.html",
    "ConstituencyType": "/hr_head",
    "Electorate": 74499,
    "ValidVotes": 48694,
  },
  ndex: 'gov1',
  id: '2',
  type: 'constituencies',
  body: {
    "ConstituencyName": "Each company has its own career page. This career page contains all the current open jobs. The purpose of this isHow can I include career page in our company website?In the top right header, next to your team name you will find second SkilledTree icon. Copy the link of this page and send it to your technical team. They will help to attach this link in your company website",
    "url": "HR Regional.html",
    "ConstituencyID": "HR Regional.html",
    "ConstituencyType": "/hr_regional",
    "Electorate": 74499,
    "ValidVotes": 48694,
  },
},function(err,resp,status) {
    console.log(resp);
});