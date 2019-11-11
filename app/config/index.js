'use strict';

if (process.env.NODE_ENV === 'production') {
  //offer production stage enviroment variables

  module.exports = {
    host: process.env.host || '',
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret,
    google: {
      clientID:
        '916830606516-ne6letfmkphkm3h4k849n149dbsuabm0.apps.googleusercontent.com',
      clientSecret: 'WS9Umx9Bo-0fzy3wVykTPduc',
      callbackURL: '//localhost:3000/api/auth/google/callback',
      profileFields: ['id', 'displayName', 'photos', 'name', 'emails'],
    },
  };
} else {
  module.exports = require('./development.json');
}
