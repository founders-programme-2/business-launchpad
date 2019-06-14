const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const secret = process.env.secretOrKey;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
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
