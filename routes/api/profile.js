const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator')


//@route GET api/profile/me (you don't have to include the /profile in the route below, just the /me)
//@ desc  Get current users profile
//@access private
router.get('/me',auth, async (req,res) =>  {
  try {
   const profile = await Profile.findOne({user:req.user.id}).populate('user',['name','avatar']);
   if(!profile) {
       return res.status(400).json({msg:'There is no profile for this user'});
   }

   res.json(profile);

  }catch(err){
    console.err(err.message);
     res.status(500).send('Server error!!!!')
    }
  
});

//@route POST api/profile/ 
//@ desc Create or update user profile
//@access private
router.post('/',[auth,
  check('status','Status is required').not().isEmpty(),
  check('skills','Status is required').not().isEmpty()],
  async(req,res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
          return res.status(400).json({errors:errors.array()});
      }
      
  const {
    company,
    webSite,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
    } = req.body;
    
   //Build profile object
   const profileFields = {};
   profileFields.user = req.user.id;
   if(company) profileFields.company = company;
   if(webSite) profileFields.webSite = webSite;
   if(location) profileFields.location = location;
   if(bio) profileFields.bio = bio;
   if(status) profileFields.status = status;
   if(githubusername) profileFields.githubusername = githubusername;

   if(skills) {
       profileFields.skills = skills.split(',').map(skill => skill.trim());
   }
 
   //build social object
   profileFields.social = {}
   if(youtube) profileFields.social.youtube = youtube;
   if(facebook) profileFields.social.facebook = facebook;
   if(twitter) profileFields.social.twitter = twitter;
   if(instagram) profileFields.social.instagram = instagram;
   if(linkedin) profileFields.social.linkedin = linkedin;

    try {
       let profile = await Profile.findOne({user:req.user.id});
       
       //if profile is found, update
       if(profile) {
           profile = await Profile.findOneAndUpdate(
               {user:req.user.id},
               {$set: profileFields},
               {new:true}
              );
              return res.json(profile);
        }

        //Create New profile if the profile does not exist
        profile = new Profile(profileFields);
        await profile.save();
        return res.json(profile);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send('Server error!!!!')
    }

   }
  );

  

module.exports = router;
