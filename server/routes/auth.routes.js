import {Router} from 'express';
import authHandler from "../lib/authHandler";

const router = new Router();

router.route('/login').post((req, res) => {
  let user = req.body;
  authHandler.attemptLogin(user, function (err, post) {
    if (err) {
      res.status(500);
      res.json({
        status: 'Error',
        data: err
      });
    } else {
      res.status(200);
      res.json({
        status: 'Success',
        data: post
      });
    }
  });
});

export default router;
