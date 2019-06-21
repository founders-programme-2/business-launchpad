// for help check out http://www.passportjs.org/packages/passport-jwt/
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const secret = process.env.secretOrKey;

// options controls how the token is extracted from the request or verified
const options = {};

// creates a new extractor that looks for the JWT in the authorization header with the scheme 'bearer'
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// secretOrKey is a string containing a secret for verifying the token's signature
options.secretOrKey = secret;

module.exports = passport => {
  passport.use(
    // call JWT auth strategy
    // eslint-disable-next-line camelcase
    new JwtStrategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) return done(null, user);
          return done(null, false);
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(`You have a JWT passport error ${err}`));
    })
  );
};
