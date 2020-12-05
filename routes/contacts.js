const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
const controllerscontact = require('../controllers/contactcontrollers');
//@post method
//@desc:post a contact
//@path:http://localhost:6000/api/contact
//params body
router.post('/', controllerscontact.postcontact);

//@Get method
//@desc:Get all contact
//@path:http://localhost:6000/api/contact
router.get('/', controllerscontact.getallcontact);

//@Get method
//@desc:Get one contact by id
//@path:http://localhost:6000/api/contact:id
//params ID
router.get('/:id', controllerscontact.getonecontactbyid);

//@ method DELETE
//@desc:DELETE one contact by id
//@path:http://localhost:6000/api/contact:id
//params ID
router.delete('/:id', controllerscontact.deleteonecontactbyid);
//@ method PUT
//@desc: UPDATE one contact by id
//@path:http://localhost:6000/api/contact:id
//params body ID
router.put('/:id', controllerscontact.updatecontact);
module.exports = router;
