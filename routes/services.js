const express = require('express');
const { addServices, getServices, updateServices, deleteServices, searchLocation, getById } = require('../controllers/services');

const servicesRouter = express.Router();
servicesRouter.post('/',addServices);
servicesRouter.get('/',getServices);
servicesRouter.get('/:id',getById)
servicesRouter.put('/:id',updateServices);
servicesRouter.delete('/:id',deleteServices);
servicesRouter.get('/searchLocation',searchLocation)


module.exports = servicesRouter;