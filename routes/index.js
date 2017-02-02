var express = require('express');
var router = express.Router();
var client = require('../extra/connection.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hr_head',function(req,res, next){
  res.render('hr_head', { title: 'HR Head' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_head/introduction',function(req,res, next){
  res.render('intro5', { title: 'Introduction' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_head/regions',function(req,res, next){
   res.render('regions', { title: 'Regions' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_head/header',function(req,res, next){
   res.render('header5', { title: 'Headers' });
  //__dirname : It will resolve to your project folder.
});
 router.get('/hr_head/settings',function(req,res, next){
   res.render('settings2', { title: 'Settings' });
  //__dirname : It will resolve to your project folder.
});

router.get('/overview',function(req,res, next){
   res.render('jpanel', { title: 'Overview' });
  //__dirname : It will resolve to your project folder.
});

//******************************* HR REGIONAL *************************************//
router.get('/hr_regional',function(req,res, next){
   res.render('hr_regional', { title: 'HR Regional' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/introduction',function(req,res, next){
   res.render('intro6', { title: 'Regional Introduction' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/manager',function(req,res, next){
   res.render('hr_manager', { title: 'HR Manager' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/header',function(req,res, next){
  res.render('header6', { title: 'Regional Header' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_regional/settings',function(req,res, next){
   res.render('settings3', { title: 'Settings' });
  //__dirname : It will resolve to your project folder.
});
//******************************* HR MANAGER **************************************//

router.get('/hr_managers',function(req,res, next){
  res.render('hr_home', { title: 'HR Manager' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/introduction',function(req,res, next){
   res.render('intro', { title: 'HR Manager Introduction' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/team',function(req,res, next){
   res.render('team', { title: 'Team' });
  //__dirname : It will resolve to your project folder.
});

router.get('/hr_managers/employees',function(req,res, next){
   res.render('employees', { title: 'Employees' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/recruiter',function(req,res, next){
   res.render('recruiter', { title: 'Recruiters' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/manager',function(req,res, next){
   res.render('manager', { title: 'Manager' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/jobs',function(req,res,next){
   res.render('jobs', { title: 'Jobs' });
  //__dirname : It will resolve to your project folder.
});

router.get('/hr_managers/resumes',function(req,res, next){
   res.render('resumes', { title: 'Resumes' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/reports',function(req,res, next){
   res.render('reports', { title: 'Reports' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/gamification',function(req,res, next){
  res.render('gamification', { title: 'Gamification' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/career',function(req,res, next){
  res.render('career', { title: 'Career' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/companybrand',function(req,res, next){
  res.render('companybrand', { title: 'Companybrand' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/dashboard',function(req,res, next){
   res.render('dashboard', { title: 'Dashboard' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/header',function(req,res, next){
   res.render('header', { title: 'Header' });
  //__dirname : It will resolve to your project folder.
});
router.get('/hr_managers/settings',function(req,res, next){
   res.render('settings', { title: 'Settings' });
  //__dirname : It will resolve to your project folder.
});

//****************************** RECRUITER ************************************//

router.get('/recruiter',function(req,res, next){
  res.render('recruiter_home', { title: 'Recruiter' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/introduction',function(req,res, next){
   res.render('intro2', { title: 'Recruiter Introduction' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/dashboard',function(req,res, next){
 res.render('dashboard2', { title: 'Dashboard' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/jobs',function(req,res, next){
  res.render('Jobs2', { title: 'Jobs' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/employees',function(req,res, next){
   res.render('employees2', { title: 'Employees' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/resumes',function(req,res, next){
  res.render('resumes2', { title: 'Resumes' });
  //__dirname : It will resolve to your project folder.
});
router.get('/recruiter/header',function(req,res, next){
   res.render('header2', { title: 'Header' });
  //__dirname : It will resolve to your project folder.
});

//***************************************************	 EMPLOYEES ***************************************//


router.get('/employees',function(req,res, next){
   res.render('employees_home', { title: 'Employees' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/introduction',function(req,res, next){
   res.render('intro3', { title: 'Introduction' });
  //__dirname : It will resolve to your project folder.
});

router.get('/employees/dashboard',function(req,res, next){
   res.render('dashboard3', { title: 'Dashboard' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/points_and_gifts',function(req,res, next){
 res.render('points', { title: 'Points and Gifts' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/friends',function(req,res, next){
  res.render('friends', { title: 'Friends' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/Jobs',function(req,res, next){
   res.render('jobs2', { title: 'Jobs' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/resumes',function(req,res, next){
   res.render('resumes3', { title: 'Resumes' });
  //__dirname : It will resolve to your project folder.
});
router.get('/employees/header',function(req,res, next){
   res.render('header3', { title: 'Header' });
  //__dirname : It will resolve to your project folder.
});


//******************************************* FRIENDS ****************************************//

router.get('/friends',function(req,res, next){
   res.render('friends_home', { title: 'Friends' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/introduction',function(req,res, next){
  res.render('intro4', { title: 'Introduction' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/current_openings',function(req,res, next){
 res.render('dashboard4', { title: 'Current Openings' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/job_tweets',function(req,res, next){
  res.render('job_tweets', { title: 'Job Tweets' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/share_resumes',function(req,res, next){
   res.render('share_resumes', { title: 'share Resumes' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/resumes',function(req,res, next){
   res.render('resumes4', { title: 'Resumes' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/my_profile',function(req,res, next){
  res.render('my_profile', { title: 'My Profile' });
  //__dirname : It will resolve to your project folder.
});
router.get('/friends/header',function(req,res, next){
   res.render('header4', { title: 'Header' });
  //__dirname : It will resolve to your project folder.
});
//*******************************************FAQs***********************************************//
router.get('/faq',function(req,res, next){
 res.render('faq', { title: 'FAQs' });
  //__dirname : It will resolve to your project folder.
});


module.exports = router;
