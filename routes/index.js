var express = require('express');
var router = express.Router();
var client = require('../extra/connection.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hr_head',function(req,res, next){
  res.render('hr_head', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_head/introduction',function(req,res, next){
  res.render('intro5', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_head/regions',function(req,res, next){
   res.render('regions', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_head/header',function(req,res, next){
   res.render('header5', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
 router.get('/hr_head/settings',function(req,res, next){
   res.render('settings2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});

//******************************* HR REGIONAL *************************************//
router.get('/hr_regional',function(req,res, next){
   res.render('hr_regional', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/introduction',function(req,res, next){
   res.render('intro6', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/manager',function(req,res, next){
   res.render('hr_manager', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/header',function(req,res, next){
  res.render('header6', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/settings',function(req,res, next){
   res.render('settings3', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
//******************************* HR MANAGER **************************************//

router.get('/hr_managers',function(req,res, next){
  res.render('hr_home', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/introduction',function(req,res, next){
   res.render('intro', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/team',function(req,res, next){
   res.render('team', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});

router.get('/hr_managers/employees',function(req,res, next){
   res.render('employees', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/recruiter',function(req,res, next){
   res.render('recruiter', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/manager',function(req,res, next){
   res.render('manager', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/jobs',function(req,res,next){
   res.render('jobs', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});

router.get('/hr_managers/resumes',function(req,res, next){
   res.render('resumes', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/reports',function(req,res, next){
   res.render('reports', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/gamification',function(req,res, next){
  res.render('gamification', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/career',function(req,res, next){
  res.render('career', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/companybrand',function(req,res, next){
  res.render('companybrand', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/dashboard',function(req,res, next){
   res.render('dashboard', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/header',function(req,res, next){
   res.render('header', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/settings',function(req,res, next){
   res.render('settings', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});

//****************************** RECRUITER ************************************//

router.get('/recruiter',function(req,res, next){
  res.render('recruiter_home', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/introduction',function(req,res, next){
   res.render('intro2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/dashboard',function(req,res, next){
 res.render('dashboard2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/jobs',function(req,res, next){
  res.render('Jobs2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/employees',function(req,res, next){
   res.render('employees2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/resumes',function(req,res, next){
  res.render('resumes2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/header',function(req,res, next){
   res.render('header2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});

//***************************************************	 EMPLOYEES ***************************************//


router.get('/employees',function(req,res, next){
   res.render('employees_home', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/introduction',function(req,res, next){
   res.render('intro3', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});

router.get('/employees/dashboard',function(req,res, next){
   res.render('dashboard3', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/points_and_gifts',function(req,res, next){
 res.render('points', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/friends',function(req,res, next){
  res.render('friends', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/Jobs',function(req,res, next){
   res.render('jobs2', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/resumes',function(req,res, next){
   res.render('resumes3', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/header',function(req,res, next){
   res.render('header3', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});


//******************************************* FRIENDS ****************************************//

router.get('/friends',function(req,res, next){
   res.render('friends_home', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/introduction',function(req,res, next){
  res.render('intro4', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/current_openings',function(req,res, next){
 res.render('dashboard4', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/job_tweets',function(req,res, next){
  res.render('job_tweets', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/share_resumes',function(req,res, next){
   res.render('share_resumes', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/resumes',function(req,res, next){
   res.render('resumes4', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/my_profile',function(req,res, next){
  res.render('my_profile', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/header',function(req,res, next){
   res.render('header4', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});
//*******************************************FAQs***********************************************//
router.get('/faq',function(req,res, next){
 res.render('faq', { title: 'Express' });
  //__dirname : It will resolve to your project folder.
});


module.exports = router;
