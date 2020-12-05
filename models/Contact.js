const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactschema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
});
module.exports = Contact = mongoose.model('contact', contactschema);
