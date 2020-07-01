import config from '../config';
import jwt from 'jsonwebtoken';
import async from 'async';
import _ from 'lodash';
import bcrypt from 'bcrypt-nodejs';
import userHelper from '../helpers/user.helper';

function generateHash (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validPassword (entered_password, stored_password) {
  return bcrypt.compareSync(entered_password, stored_password);
}

function attemptLogin (creds, next) {
  let inputCreds = creds;
  let model = {};
  async.series([
    cb => {
      let filters = {};
      filters.query = {
        email : { $eq : inputCreds.email }
      };
      filters.selectFrom = {};
      userHelper.getObjectByQuery(filters, (err, user) => {
        if (err) {
          return cb(err);
        } else {
          if (!user) {
            model.isUserFound = false;
            model.message = 'No User Found';
          } else if (!validPassword(inputCreds.password, user.password)) {
            model.isUserFound = true;
            model.message = 'Oops! Wrong Password';
          } else {
            let newUser = {
              _id: user._id,
              name: user.name,
              email: user.email,
            };
            const token = jwt.sign(newUser, config.COOKIE_SECRET);
            model.isUserFound = true;
            model.user = user;
            model.token = token;
            model.message = 'Logged In';
          }
          return cb();
        }
      });
    }
  ], err => {
    if (err) {
      return next(err);
    } else {
      return next(null, model);
    }
  });
}

export default {
  attemptLogin
};
