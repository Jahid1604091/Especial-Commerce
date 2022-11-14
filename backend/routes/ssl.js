const express = require('express');
const { initiateSSL, SSLsuccess, SSLcancel, SSLipn, SSLfailure, SSLvalidate } = require('../controller/ssl');
const router = express.Router();


router.route('/ssl-request').post(initiateSSL)
router.route('/ssl-success').post(SSLsuccess)
router.route('/ssl-fail').post(SSLfailure)
router.route('/ssl-cancel').post(SSLcancel)
router.route('/ssl-ipn').post(SSLipn)
router.route('/ssl-validate').post(SSLsuccess,SSLvalidate)
 
module.exports = router;