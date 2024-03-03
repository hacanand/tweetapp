const JWTStrategy = require("passport-jwt").Strategy;
const User=require("../models/user");
const ExtractJWT = require("passport-jwt").ExtractJwt;
const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'twitter_secret',
}
export const passportAuth = async (passport) => {
    passport.use(new JWTStrategy(opts,async  (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id)
        if(!user) {
            return done(null, false);
        }
        else
        done(null, user);
    }));
}