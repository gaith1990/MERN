exports.postcontact = async (req, res) => {
  try {
    const newcontact = new Contact(req.body);
    const response = await newcontact.save();
    res.send({response: response, message: 'contact is saved'});
  } catch (error) {
    res.status(500).send({message: 'can not save contact'});
  }
};
exports.getallcontact = async (req, res) => {
  try {
    const response = await Contact.find();
    res.send({response: response, message: 'getting contacts successfully'});
  } catch (error) {
    res.status(500).send({message: 'can not get contact'});
  }
};
exports.getonecontactbyid = async (req, res) => {
  try {
    const response = await Contact.findOne({_id: req.params.id});
    res.send({response: response, message: 'getting contacts successfully'});
  } catch (error) {
    res.status(500).send({message: 'there is no contact with this id'});
  }
};
exports.deleteonecontactbyid = async (req, res) => {
  try {
    const response = await Contact.deleteOne({_id: req.params.id});
    response.n
      ? res.send({message: 'contact deleted'})
      : res.send({message: 'there is no contact widh this id'});
  } catch (error) {
    res.status(500).send({message: 'not deleted'});
  }
};
exports.updatecontact = async (req, res) => {
  try {
    const response = await Contact.updateOne(
      {_id: req.params.id},
      {$set: {...req.body}}
    );
    response.nModified
      ? res.send({message: 'contact updated'})
      : res.send({message: 'contact already updated'});
  } catch (error) {
    res.status(400).send({message: 'not update'});
  }
};
