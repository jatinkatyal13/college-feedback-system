import passport from 'passport'
import LocalStrategy from 'passport-local'
import { Users } from '../db'

// Setup passport
passport.use(
  new LocalStrategy((username, password, done) => {
    Users.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      return done(null, user)
    })
  }),
)

export { passport }
