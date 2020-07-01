import {Router} from 'express';
import responseStatus from '../constants/responseStatus.json';
import leadHelper from '../helpers/lead.helper';
import async from 'async';

const router = new Router();

router.route('/leads/list').post((req, res) => {
  let filter = {};
  filter.query = {};
  let model = {};
  async.series([
    cb => {
      filter.pageNum = req.body.pageNum;
      filter.pageSize = req.body.pageSize;
      filter.sortBy = {};
      leadHelper.getAllObjects(filter, (err, leads) => {
        if (err) {
          return cb(err);
        } else {
          model.leads = leads;
          return cb();
        }
      });
    },
    cb => {
      leadHelper.getAllObjectsCount(filter, (err, leadCount) => {
        if (err) {
          return cb(err);
        } else {
          model.leadCount = leadCount;
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
          leads: model.leads,
          count: model.leadCount
        }
      });
    }
  });
});

// create an entry of leadin db
router.route('/leads/new').post((req, res) => {
  let lead = req.body.lead;
  leadHelper.addObject(lead, (err, saved) => {
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
          lead: saved
        }
      });
    }
  });
});

// read for single entry
router.route('/leads/url/:url').get((req, res) => {
  let filters = {};
  filters.query = {
    url : { $eq : req.params.url }
  };
  leadHelper.getObjectByQuery(filters, (err, lead) => {
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
          lead: lead
        }
      });
    }
  });
});

// read for single entry
router.route('/leads/:id').get((req, res) => {
  let leadId = req.params.id;
  let filters = {};
  filters.id = leadId;
  leadHelper.getObjectById(filters, (err, lead) => {
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
          lead: lead
        }
      });
    }
  });
});

// update with id
router.route('/leads/:id/update').post((req, res) => {
  let leadId = req.params.id;
  let lead = req.body.lead;
  leadHelper.updateObjectById(leadId, lead, (err, updated) => {
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
          lead: updated
        }
      });
    }
  });
});

// delete by id
router.route('/leads/:id/remove').post((req, res) => {
  let leadId = req.params.id;
  leadHelper.deleteObject(leadId, (err, updated) => {
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
          lead: updated
        }
      });
    }
  });
});
export default router;
