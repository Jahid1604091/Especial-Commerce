const SSLCommerzPayment = require('sslcommerz-lts');

//sslcommerz init
exports.initiateSSL = async (req, res) => {
    // console.log(`${req.protocol}://${req.get('host')}`)
    //using validate instead success url 
    let data = {
        ...req.body,
        currency: 'BDT',
        success_url: `http://localhost:5000/api/payment/ssl-validate`,
        fail_url: `http://localhost:5000/api/payment/ssl-fail`,
        cancel_url: `http://localhost:5000/api/payment/ssl-cancel`,
        ipn_url: `http://localhost:5000/api/payment/ssl-ipn`,
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Test',
        cus_email: 'test@yahoo.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Mymensingh',
        cus_state: 'Dhaka',
        cus_postcode: 2200,
        cus_country: 'BD',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'test Ship',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 2200,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };

    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false) //true for live default false for sandbox
    const r1 = await sslcommer.init(data);
    return res.status(200).json({
        success: true,
        data: r1
    });

    //    res.redirect(r1.GatewayPageURL)

}

exports.SSLipn = async (req, res) => {
    console.log('ipn : ' + req.body)
    return res.status(200).json({
        success: true,
        data: req.body
    });
}

exports.SSLsuccess = async (req, res, next) => {
    req.val_id = req.body.val_id;
    next()
    //  res.redirect(`http://localhost:3000/payment/success`)
}

exports.SSLfailure = async (req, res) => {
    console.log('fail : ' + req.body)
    return res.redirect(`http://localhost:3000/payment/fail`)
}

exports.SSLcancel = async (req, res) => {
    console.log('cancel : ' + req.body)
    return res.redirect(`http://localhost:3000/payment/fail`)
}

exports.SSLvalidate = async (req, res) => {
   //tran_id = order_id
    const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false)
    const r1 = await sslcz.validate({ val_id: req.val_id })
    res.redirect(`http://localhost:3000/orders/${r1.tran_id}?status=${r1.status}`)
}