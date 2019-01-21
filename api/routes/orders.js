const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order Created'
    });
});

// Above, we just created an order

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Details',
        orderID: req.params.orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted',
        orderID: req.params.orderID
    });
});


module.exports = router;