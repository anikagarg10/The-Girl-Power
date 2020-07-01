import {Router} from 'express';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'admin@wavicletech.com',
    pass: 'kitvjqhiiidrytsw'
  }
});

const router = new Router();


router.route('/contact-us').post((req, res) => {
  const mailOptions = {
    from: 'admin@wavicletech.com', // sender address
    to: 'admin@wavicletech.com', // list of receivers
    subject: 'Contact Us from Limechat.ai', // Subject line
    html: '<p>Hi this is a test message!</p>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err) {
      console.log(err)
      res.status(500).json({
        status: 'Error',
        data: {
          message: err
        }
      });
    }
    else {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'Sent'
        }
      });
    }
  });
});


router.route('/demo-signup').post((req, res) => {
  let lead = req.body.lead;
  let text = `Hi, ${lead.first_name ? lead.first_name : ''} ${lead.last_name ? lead.last_name : ''} is looking to hire your service. His/Her email id is ${lead.email} and phone is ${lead.phone}. S(he) is ${lead.jobTitle} from ${lead.country}. They left a message: ${lead.message}`;
  const mailOptions = {
    from: 'admin@wavicletech.com', // sender address
    to: 'ritwiksahoovm@gmail.com', // list of receivers
    subject: 'Contact Us from Limechat.ai', // Subject line
    html: `<p>${text}</p>`// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err) {
      console.log(err)
      res.status(500).json({
        status: 'Error',
        data: {
          message: err
        }
      });
    }
    else {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'Sent'
        }
      });
    }
  });
});

export default router;
