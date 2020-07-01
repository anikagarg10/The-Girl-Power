import {Router} from 'express';
import responseStatus from '../constants/responseStatus.json';
import postHelper from '../helpers/post.helper';
import async from 'async';

const router = new Router();

router.route('/posts/list').post((req, res) => {
  let filter = {};
  filter.query = {};
  let model = {};
  async.series([
    cb => {
      filter.pageNum = req.body.pageNum;
      filter.pageSize = req.body.pageSize;
      filter.sortBy = {};
      postHelper.getAllObjects(filter, (err, posts) => {
        if (err) {
          return cb(err);
        } else {
          model.posts = posts;
          return cb();
        }
      });
    },
    cb => {
      postHelper.getAllObjectsCount(filter, (err, postCount) => {
        if (err) {
          return cb(err);
        } else {
          model.postCount = postCount;
          return cb();
        }
      });
    }
  ], (err) => {
    if (err) {
      res.status(responseStatus.INTERNAL_SERVER_ERROR).json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(responseStatus.STATUS_SUCCESS_OK).json({
        status: "Success",
        data: {
          posts: model.posts,
          count: model.postCount
        }
      });
    }
  });
});

// create an entry of postin db
router.route('/posts/new').post((req, res) => {
  let post = req.body.post;
  postHelper.addObject(post, (err, saved) => {
    if (err) {
      res.status(responseStatus.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(responseStatus.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: saved
        }
      });
    }
  });
});

// read for single entry
router.route('/posts/url/:url').get((req, res) => {
  let filters = {};
  filters.query = {
    url : { $eq : req.params.url }
  };
  postHelper.getObjectByQuery(filters, (err, post) => {
    if (err) {
      res.status(responseStatus.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(responseStatus.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: post
        }
      });
    }
  });
});

// read for single entry
router.route('/posts/:id').get((req, res) => {
  let postId = req.params.id;
  let filters = {};
  filters.id = postId;
  postHelper.getObjectById(filters, (err, post) => {
    if (err) {
      res.status(responseStatus.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(responseStatus.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: post
        }
      });
    }
  });
});

// update with id
router.route('/posts/:id/update').post((req, res) => {
  let postId = req.params.id;
  let post = req.body.post;
  postHelper.updateObjectById(postId, post, (err, updated) => {
    if (err) {
      res.status(responseStatus.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(responseStatus.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: updated
        }
      });
    }
  });
});

// delete by id
router.route('/posts/:id/remove').post((req, res) => {
  let postId = req.params.id;
  postHelper.deleteObject(postId, (err, updated) => {
    if (err) {
      res.status(responseStatus.INTERNAL_SERVER_ERROR);
      res.json({
        status: "Error",
        data: {
          message: err
        }
      });
    } else {
      res.status(responseStatus.STATUS_SUCCESS_OK);
      res.json({
        status: "Success",
        data: {
          post: updated
        }
      });
    }
  });
});
export default router;
