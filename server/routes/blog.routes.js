import {Router} from 'express';
import responseStatus from '../constants/responseStatus.json';
import blogHelper from '../helpers/blog.helper';
import async from 'async';

const router = new Router();

router.route('/blogs/list').post((req, res) => {
  let filter = {};
  filter.query = {};
  let model = {};
  async.series([
    cb => {
      filter.pageNum = req.body.pageNum;
      filter.pageSize = req.body.pageSize;
      filter.sortBy = {};
      blogHelper.getAllObjects(filter, (err, blogs) => {
        if (err) {
          return cb(err);
        } else {
          model.blogs = blogs;
          return cb();
        }
      });
    },
    cb => {
      blogHelper.getAllObjectsCount(filter, (err, blogCount) => {
        if (err) {
          return cb(err);
        } else {
          model.blogCount = blogCount;
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
          blogs: model.blogs,
          count: model.blogCount
        }
      });
    }
  });
});

// create an entry of blogin db
router.route('/blogs/new').post((req, res) => {
  let blog = req.body.blog;
  blogHelper.addObject(blog, (err, saved) => {
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
          blog: saved
        }
      });
    }
  });
});

// read for single entry
router.route('/blogs/url/:url').get((req, res) => {
  let filters = {};
  filters.query = {
    url : { $eq : req.params.url }
  };
  blogHelper.getObjectByQuery(filters, (err, blog) => {
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
          blog: blog
        }
      });
    }
  });
});

// read for single entry
router.route('/blogs/:id').get((req, res) => {
  let blogId = req.params.id;
  let filters = {};
  filters.id = blogId;
  blogHelper.getObjectById(filters, (err, blog) => {
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
          blog: blog
        }
      });
    }
  });
});

// update with id
router.route('/blogs/:id/update').post((req, res) => {
  let blogId = req.params.id;
  let blog = req.body.blog;
  blogHelper.updateObjectById(blogId, blog, (err, updated) => {
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
          blog: updated
        }
      });
    }
  });
});

// delete by id
router.route('/blogs/:id/remove').post((req, res) => {
  let blogId = req.params.id;
  blogHelper.deleteObject(blogId, (err, updated) => {
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
          blog: updated
        }
      });
    }
  });
});
export default router;
