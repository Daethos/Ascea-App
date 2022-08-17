const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!

// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    },
    async function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
      const user = await User.findOne({googleId: profile.id});

      if(user) return cb(null, user);

      try {
        const newUser = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value
        })
        return cb(null, newUser)
      } catch(err) {
        return cb(err)
      }
    }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
  // <-- This was given w/ user.id, I changed it to user._id, not sure if that's right
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, userDocument) {
    if(err) return done(err)
    done(null, userDocument);
  })
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
});



