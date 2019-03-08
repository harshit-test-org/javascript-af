import * as passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import { db } from '../apolloServer';

export const authInit = () => {
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        passReqToCallback: true,
        scope: ['user'],
        callbackURL: '/auth/github/callback',
      },
      async (
        _: any,
        token: string,
        __: any,
        profile: any,
        done: (err: Error | null, user?: any) => void
      ) => {
        const name =
          profile.displayName || profile.username || profile._json.name || '';
        const splitProfileUrl = profile.profileUrl.split('/');
        const fallbackUsername = splitProfileUrl[splitProfileUrl.length - 1];
        const githubUsername =
          profile.username || profile._json.login || fallbackUsername;
        const email =
          (profile.emails &&
            profile.emails.length > 0 &&
            profile.emails[0].value) ||
          null;
        try {
          const user = await db.upsertUser({
            where: {
              username: githubUsername,
            },
            create: {
              name,
              email,
              username: githubUsername,
              githubToken: token,
              profilePic: profile.avatar_url || null,
            },
            update: {
              githubToken: token,
            },
          });
          return done(null, user);
        } catch (ex) {
          return done(ex);
        }
      }
    )
  );
};
