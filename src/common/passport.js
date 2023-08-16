import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import User from '../models/userModel.js';
import bodyParser from 'body-parser';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

dotenv.config();
const app = express();
app.use(bodyParser.json({ strict: false }));

const secretKey = process.env.JWT_SECRET || '';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_LOGIN_CLIENT_ID || 'default-client-id';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_LOGIN_SECRET_ID || 'default-client-secret';






passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secretKey
        },
        async (payload, done) => {
            try {
                const user = await User.findById(payload.id);
                if (!user) {
                    return done(null, false);
                }
                done(null, user);
            } catch (error) {
                done(error, false);
            }
        }
    )
);

// Middleware for authenticating JWT token
async function authenticateJWT(req, res, next) {
    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        try {
            const decodedToken= jwt.verify(token, secretKey);
            const user = await User.findById(decodedToken.userId);
            if (!user) {
                res.status(401).json({ success: false, error: 'Unauthorize' });
            }
            req.user = user;
            next();
        } catch (error) {
            
            res.status(403).json({ success: false, error: 'Forbidden' });
        }
    } else {
        res.status(401).json({ success: false, error: 'Unauthorize' });;
    }
}


app.use(passport.initialize());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
export { passport, authenticateJWT };
