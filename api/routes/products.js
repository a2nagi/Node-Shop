const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: '/products GET requests reach here'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: '/products POST requests reach here'
    });
});

router.get('/:ID', (req, res, next) => {
    const id = req.params.ID;
    if (id == 'special')
    {
        res.status(200).json({
            message: 'This is a special product',
            id: id
        });
    }

    else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:ID', (req, res, next) => {
    res.status(200).json({
        message: 'Edited Product'
    });
});

router.delete('/:ID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product'
    });
});



module.exports = router;